#!/usr/bin/env node
/**
 * Image optimization pipeline.
 *
 * Reads source images from `public/img-source/`, generates WebP versions in
 * `public/img/` resized to max 1600px wide at quality 80. Runs automatically
 * before `next build` via the `build` script in package.json.
 *
 * Output folder is gitignored — images are regenerated on every build (locally
 * and on Cloudflare Pages). Source images stay in git so the originals are
 * preserved.
 *
 * Add new images: drop them in `public/img-source/`, reference them in JSX
 * as `/img/<basename>.webp`.
 */

import { readdir, mkdir, stat, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = 'public/img-source';
const OUTPUT_DIR = 'public/img';
const MAX_WIDTH = 1600;
const QUALITY = 80;
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff']);

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0).padStart(5, ' ')} KB`;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function run() {
  if (!(await exists(SOURCE_DIR))) {
    console.log(`[images] No source dir at ${SOURCE_DIR}, skipping.`);
    return;
  }

  // Clean output dir so removed source files don't linger.
  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(SOURCE_DIR);
  let totalIn = 0;
  let totalOut = 0;
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!SUPPORTED.has(ext)) continue;

    const srcPath = path.join(SOURCE_DIR, file);
    const srcStat = await stat(srcPath);
    if (!srcStat.isFile()) continue;

    const baseName = path.basename(file, ext);
    const outPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

    await sharp(srcPath)
      .rotate() // respect EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(outPath);

    const outStat = await stat(outPath);
    totalIn += srcStat.size;
    totalOut += outStat.size;
    count += 1;

    const pct = ((1 - outStat.size / srcStat.size) * 100).toFixed(0);
    console.log(
      `[images] ${file.padEnd(24)} ${fmtKB(srcStat.size)} → ${baseName}.webp ${fmtKB(outStat.size)}  (-${pct}%)`,
    );
  }

  if (count === 0) {
    console.log('[images] No images to optimize.');
    return;
  }

  const totalPct = ((1 - totalOut / totalIn) * 100).toFixed(0);
  console.log(
    `[images] Done: ${count} files, ${fmtKB(totalIn)} → ${fmtKB(totalOut)} (-${totalPct}%)`,
  );
}

run().catch((err) => {
  console.error('[images] Optimization failed:', err);
  process.exit(1);
});
