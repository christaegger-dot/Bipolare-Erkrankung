#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────
// cache-bust.js — Automatic content-hash cache busting
//
// Replaces ?v=... query parameters on CSS/JS references
// with short content hashes. Run as Netlify build command.
// ─────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;

function fileHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 7);
}

// ── Step 1: Hash base assets ────────────────────────────────
const hashes = {};
for (const name of ['shared.css', 'main.js', 'init.js', 'search-index.js']) {
  hashes[name] = fileHash(path.join(ROOT, name));
}

// ── Step 2: Update search.js (references search-index.js) ──
const searchJsPath = path.join(ROOT, 'search.js');
let searchJs = fs.readFileSync(searchJsPath, 'utf8');
searchJs = searchJs.replace(
  /\/search-index\.js\?v=[a-f0-9]+/,
  '/search-index.js?v=' + hashes['search-index.js']
);
fs.writeFileSync(searchJsPath, searchJs);

// Hash the updated search.js
hashes['search.js'] = fileHash(searchJsPath);

// ── Step 3: Replacement helper ──────────────────────────────
const VERSION_RE = /(\/(shared\.css|main\.js|init\.js|search\.js|search-index\.js))\?v=[a-f0-9]+/g;

function replaceVersions(content) {
  return content.replace(VERSION_RE, function(match, pathPart, fileName) {
    return pathPart + '?v=' + hashes[fileName];
  });
}

// ── Step 4: Update all HTML files ───────────────────────────
function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '_dev') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findHtmlFiles(full));
    else if (entry.name.endsWith('.html')) results.push(full);
  }
  return results;
}

let updatedCount = 0;
for (const file of findHtmlFiles(ROOT)) {
  const content = fs.readFileSync(file, 'utf8');
  const updated = replaceVersions(content);
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    updatedCount++;
    console.log('  ' + path.relative(ROOT, file));
  }
}

// ── Step 5: Update sw.js ────────────────────────────────────
const swPath = path.join(ROOT, 'sw.js');
let sw = fs.readFileSync(swPath, 'utf8');
sw = replaceVersions(sw);

// Update CACHE_NAME with combined hash for automatic SW refresh
const combinedHash = crypto.createHash('md5')
  .update(Object.values(hashes).sort().join(''))
  .digest('hex').slice(0, 7);
sw = sw.replace(
  /const CACHE_NAME = '[^']+';/,
  "const CACHE_NAME = 'bipolar-puk-" + combinedHash + "';"
);
fs.writeFileSync(swPath, sw);

// ── Summary ─────────────────────────────────────────────────
console.log('\ncache-bust: Updated ' + updatedCount + ' HTML files + sw.js + search.js');
console.log('  Hashes:');
for (const [name, h] of Object.entries(hashes)) {
  console.log('    ' + name + ': ' + h);
}
console.log('    CACHE_NAME: bipolar-puk-' + combinedHash);
