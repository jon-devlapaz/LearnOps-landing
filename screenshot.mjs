import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/');
  
  // Desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

  await browser.close();
})();