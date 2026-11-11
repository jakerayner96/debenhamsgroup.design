#!/usr/bin/env node
// Screenshot a page as a persona's device (Playwright device emulation — headless Chrome --window-size lies under ~500px).
//   node tools/persona-test/snap.mjs <url> <out.png> [phone|tablet|laptop] [--full]
// For a whole journey, import { open } and drive the page yourself:  const { page, close } = await open(url, 'phone');
import { DEVICES } from './lib.mjs';
const PW = process.env.PLAYWRIGHT || '/Users/jake.rayner/Desktop/GROUP DESIGN SYSTEM/TOOLS/SITE scraper/node_modules/playwright/index.mjs';
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
export async function open(url, dev = 'phone') {
  const { chromium } = await import(PW); const d = DEVICES[dev] || DEVICES.phone;
  const browser = await chromium.launch({ executablePath: CHROME });
  const ctx = await browser.newContext({ viewport: { width: d.w, height: d.h }, isMobile: d.mobile, hasTouch: d.mobile, deviceScaleFactor: d.mobile ? 2 : 1 });
  const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message)); page.on('console', m => m.type() === 'error' && errors.push(m.text()));
  if (url) await page.goto(url, { waitUntil: 'networkidle' });
  return { page, errors, close: () => browser.close() };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const [url, out, dev = 'phone'] = process.argv.slice(2); if (!url || !out) { console.log('usage: snap.mjs <url> <out.png> [phone|tablet|laptop] [--full]'); process.exit(1); }
  const { page, errors, close } = await open(url, dev); await page.waitForTimeout(800);
  await page.screenshot({ path: out, fullPage: process.argv.includes('--full') });
  console.log(JSON.stringify({ out, dev, errors, scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth) })); await close();
}
