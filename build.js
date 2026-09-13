#!/usr/bin/env node
/**
 * SmileCare Dental Clinic — Build Script
 * Zero npm dependencies. Pure Node.js.
 * Usage:
 *   node build.js          → production build (minified)
 *   node build.js --dev    → development build (no minification)
 *   node build.js --watch  → watch mode
 *   node build.js --clean  → delete dist/ only
 *   node build.js --verbose → verbose logging
 */

const fs   = require('fs');
const path = require('path');

const args    = process.argv.slice(2);
const isProd  = !args.includes('--dev');
const isWatch = args.includes('--watch');
const isClean = args.includes('--clean');
const verbose = args.includes('--verbose');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

// ── CSS concatenation order ──────────────────────────────────────────────────
const CSS_ORDER = [
  'css/variables.css',
  'css/reset.css',
  'css/base.css',
  'css/navbar.css',
  'css/hero.css',
  'css/home.css',
  'css/pages.css',
  'css/footer.css',
  'css/animations.css',
];

// ── JS concatenation order ───────────────────────────────────────────────────
const JS_ORDER = [
  'js/layout.js',
  'js/navbar.js',
  'js/animations.js',
  'js/main.js',
];

// ── HTML pages ───────────────────────────────────────────────────────────────
const HTML_PAGES = [
  'index.html',
  'pages/about.html',
  'pages/treatments.html',
  'pages/team.html',
  'pages/gallery.html',
  'pages/smile.html',
  'pages/blog.html',
  'pages/blog-post.html',
  'pages/contact.html',
  'pages/dental-tourism.html',
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function log(msg)         { console.log(`  ${msg}`); }
function logFile(f, size) { if (verbose) console.log(`    ✓ ${f}  (${size})`); }
function formatBytes(b)   { return b < 1024 ? `${b}B` : b < 1048576 ? `${(b/1024).toFixed(1)}KB` : `${(b/1048576).toFixed(2)}MB`; }

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function deleteDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`  ✓ Deleted ${dir}`);
  } else {
    console.log(`  ✓ ${dir} does not exist — nothing to clean`);
  }
}

// ── Minifiers (basic, zero-dependency) ───────────────────────────────────────
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/g, '')
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function minifyJS(js) {
  return js
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

// ── HTML path rewriting ───────────────────────────────────────────────────────
// dist/ is the web root when served; root pages use 'bundle.css',
// pages/ subpages use '../bundle.css'
function rewriteHTML(html, isRoot) {
  const prefix = isRoot ? '' : '../';

  // Strip ALL local .css <link> tags (keeps Google Fonts / external links)
  html = html.replace(/<link[^>]+href=["'][^"']*\.css["'][^>]*>\n?/gi, '');

  // Insert one bundle <link> just before </head>
  html = html.replace(
    /<\/head>/i,
    `  <link rel="stylesheet" href="${prefix}bundle.css">\n</head>`
  );

  // Strip all local .js <script src="..."> tags
  html = html.replace(/<script\s+src=["'][^"']*\.js["'][^>]*><\/script>\n?/gi, '');

  // Append bundle.js before </body>
  html = html.replace(
    /<\/body>/i,
    `<script src="${prefix}bundle.js"></script>\n</body>`
  );

  return html;
}

// ── Build ────────────────────────────────────────────────────────────────────
function build() {
  const t0 = Date.now();
  console.log('\n🦷  SmileCare — Building…\n');

  ensureDir(DIST);
  ensureDir(path.join(DIST, 'pages'));

  let filesProcessed = 0;

  // ── CSS bundle ──────────────────────────────────────────────────────────
  let cssBundle = '';
  for (const file of CSS_ORDER) {
    const full = path.join(ROOT, file);
    if (fs.existsSync(full)) {
      const content = fs.readFileSync(full, 'utf8');
      cssBundle += `/* === ${file} === */\n${content}\n`;
      logFile(file, formatBytes(Buffer.byteLength(content)));
      filesProcessed++;
    } else {
      console.warn(`  ⚠ Missing: ${file}`);
    }
  }
  if (isProd) cssBundle = minifyCSS(cssBundle);
  const cssDest = path.join(DIST, 'bundle.css');
  fs.writeFileSync(cssDest, cssBundle);
  log(`CSS bundle → dist/bundle.css  [${formatBytes(Buffer.byteLength(cssBundle))}]`);

  // ── JS bundle ───────────────────────────────────────────────────────────
  let jsBundle = '';
  for (const file of JS_ORDER) {
    const full = path.join(ROOT, file);
    if (fs.existsSync(full)) {
      const content = fs.readFileSync(full, 'utf8');
      jsBundle += `/* === ${file} === */\n${content}\n`;
      logFile(file, formatBytes(Buffer.byteLength(content)));
      filesProcessed++;
    } else {
      console.warn(`  ⚠ Missing: ${file}`);
    }
  }
  if (isProd) jsBundle = minifyJS(jsBundle);
  const jsDest = path.join(DIST, 'bundle.js');
  fs.writeFileSync(jsDest, jsBundle);
  log(`JS  bundle → dist/bundle.js   [${formatBytes(Buffer.byteLength(jsBundle))}]`);

  // ── HTML pages ──────────────────────────────────────────────────────────
  for (const page of HTML_PAGES) {
    const full = path.join(ROOT, page);
    if (!fs.existsSync(full)) { console.warn(`  ⚠ Missing: ${page}`); continue; }

    const isRoot   = !page.includes('/');
    let   html     = fs.readFileSync(full, 'utf8');
    html = rewriteHTML(html, isRoot);

    const destPath = path.join(DIST, page);
    ensureDir(path.dirname(destPath));
    fs.writeFileSync(destPath, html);
    logFile(page, formatBytes(Buffer.byteLength(html)));
    filesProcessed++;
  }
  log(`HTML pages → dist/  [${HTML_PAGES.length} files]`);

  // ── Copy images folder ──────────────────────────────────────────────────
  const imgSrc  = path.join(ROOT, 'images');
  const imgDest = path.join(DIST, 'images');
  if (fs.existsSync(imgSrc)) {
    ensureDir(imgDest);
    const imgFiles = fs.readdirSync(imgSrc);
    imgFiles.forEach(function(file) {
      fs.copyFileSync(path.join(imgSrc, file), path.join(imgDest, file));
    });
    log(`Images   → dist/images/  [${imgFiles.length} files]`);
  }

  const elapsed = Date.now() - t0;
  console.log(`\n✅  Build complete in ${elapsed}ms`);
  console.log(`   Files processed : ${filesProcessed}`);
  console.log(`   CSS bundle      : ${formatBytes(fs.statSync(cssDest).size)}`);
  console.log(`   JS bundle       : ${formatBytes(fs.statSync(jsDest).size)}`);
  console.log('\n🚀  Serve the dist/ folder directly:');
  console.log('   cd dist && npx serve .');
  console.log('   cd dist && python3 -m http.server 8080\n');
}

// ── Watch ────────────────────────────────────────────────────────────────────
function watch() {
  console.log('👁  Watch mode — press Ctrl+C to quit\n');
  build();

  let debounce;
  const watched = [
    path.join(ROOT, 'css'),
    path.join(ROOT, 'js'),
    ROOT,
  ];

  for (const dir of watched) {
    if (!fs.existsSync(dir)) continue;
    fs.watch(dir, { recursive: true }, (event, filename) => {
      if (!filename) return;
      if (filename.startsWith('dist')) return;
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        console.log(`\n📝  Changed: ${filename}`);
        build();
      }, 200);
    });
  }
}

// ── Entry ────────────────────────────────────────────────────────────────────
if (isClean) {
  console.log('\n🧹  Cleaning dist/…');
  deleteDir(DIST);
  console.log('');
} else if (isWatch) {
  watch();
} else {
  build();
}
