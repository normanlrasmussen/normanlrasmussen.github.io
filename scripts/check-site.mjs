import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('dist');
if (!existsSync(path.join(output, 'index.html'))) {
  throw new Error('No built index.html found. Run npm run build first.');
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(fullPath);
    return entry.isFile() && fullPath.endsWith('.html') ? [fullPath] : [];
  }));
  return groups.flat();
}

function candidatesFor(urlPath) {
  const localPath = path.resolve(output, '.' + decodeURIComponent(urlPath));
  if (localPath !== output && !localPath.startsWith(output + path.sep)) {
    throw new Error('Unsafe internal link: ' + urlPath);
  }
  if (path.extname(localPath)) return [localPath];
  return [localPath, path.join(localPath, 'index.html'), localPath + '.html'];
}

const broken = [];
const pages = await htmlFiles(output);
let checked = 0;
for (const page of pages) {
  const relative = path.relative(output, page).split(path.sep).join('/');
  const route = '/' + relative.replace(/index\.html$/, '');
  const document = await readFile(page, 'utf8');
  for (const match of document.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    const reference = match[1].trim();
    if (!reference || reference.startsWith('#')) continue;
    let destination;
    try { destination = new URL(reference, 'https://portfolio.test' + route); }
    catch { broken.push(relative + ': invalid URL ' + reference); continue; }
    if (destination.origin !== 'https://portfolio.test') continue;
    checked++;
    let valid = false;
    try { valid = candidatesFor(destination.pathname).some(existsSync); }
    catch { /* Invalid path is reported below. */ }
    if (!valid) broken.push(relative + ': ' + reference);
  }
}
if (broken.length) {
  console.error('Broken internal references:\n' + broken.map((item) => '  - ' + item).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Validated ' + checked + ' internal references across ' + pages.length + ' generated HTML pages.');
}
