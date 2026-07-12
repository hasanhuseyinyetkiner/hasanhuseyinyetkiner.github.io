import { gzipSync } from 'node:zlib';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const heroDirectory = path.join(dist, 'hero');
const expectedHeroes = ['dark-640.webp', 'dark-1024.webp', 'dark-1600.webp', 'light-640.webp', 'light-1024.webp', 'light-1600.webp'];
const maximumHeroBytes = new Map([[640, 100 * 1024], [1024, 200 * 1024], [1600, 350 * 1024]]);

for (const filename of expectedHeroes) {
  const width = Number(filename.match(/-(\d+)\.webp$/)?.[1]);
  const filePath = path.join(heroDirectory, filename);
  const size = (await stat(filePath)).size;
  const limit = maximumHeroBytes.get(width);
  if (limit === undefined || size > limit) {
    throw new Error(`${filename} is ${(size / 1024).toFixed(1)} KiB; limit is ${((limit ?? 0) / 1024).toFixed(0)} KiB.`);
  }
}

const assetDirectory = path.join(dist, 'assets');
const assetNames = await readdir(assetDirectory);
const entryBundle = assetNames.find((name) => /^index-.*\.js$/.test(name));
if (!entryBundle) {
  throw new Error('No production JavaScript entry bundle found.');
}

const bundle = await readFile(path.join(assetDirectory, entryBundle));
const gzipBytes = gzipSync(bundle).length;
if (gzipBytes > 90 * 1024) {
  throw new Error(`${entryBundle} is ${(gzipBytes / 1024).toFixed(1)} KiB gzipped; limit is 90 KiB.`);
}

console.log(`Performance budget passed: ${entryBundle} ${(gzipBytes / 1024).toFixed(1)} KiB gzip; six responsive hero images within budget.`);
