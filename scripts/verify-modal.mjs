import { chromium } from "playwright-core";

const URL = process.env.URL || "http://localhost:3210";
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle" });

// Open the demo modal via the nav CTA.
await page.click("nav .nav-cta");
await page.waitForSelector('[role="dialog"]', { state: "visible" });
await page.waitForTimeout(400); // settle open animation

// Numeric proof: the email input must have real padding again.
const email = page.locator("#email");
const box = await email.evaluate((el) => {
  const s = getComputedStyle(el);
  return {
    paddingLeft: s.paddingLeft,
    paddingTop: s.paddingTop,
    height: s.height,
    bg: s.backgroundColor,
    color: s.color,
  };
});
console.log("EMAIL_INPUT_COMPUTED", JSON.stringify(box));

// Type into the email field so the screenshot shows real text rendering.
await email.fill("jordan@acme.com");
await page.locator("#name").fill("Jordan Vega");
await page.locator("#company").fill("Acme Industrial Supply");

const dialog = page.locator('[role="dialog"]');
await dialog.screenshot({ path: "scripts/modal.png" });
console.log("SCREENSHOT_SAVED scripts/modal.png");

await browser.close();
