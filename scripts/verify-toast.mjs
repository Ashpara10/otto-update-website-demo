import { chromium } from "playwright-core";

const URL = process.env.URL || "http://localhost:3211";
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

// Intercept the submit so we exercise the success path without touching Neon.
await page.route("**/api/demo", (route) =>
  route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) }),
);

await page.goto(URL, { waitUntil: "networkidle" });
await page.click("nav .nav-cta");
await page.waitForSelector('[role="dialog"]', { state: "visible" });
await page.locator("#name").fill("Jordan Vega");
await page.locator("#email").fill("jordan@acme.com");
await page.locator("#company").fill("Acme Industrial Supply");
await page.getByRole("button", { name: /request demo/i }).click();

await page.waitForSelector("text=Request sent", { state: "visible" });
await page.waitForTimeout(450); // settle toast enter animation
await page.locator("li[data-sonner-toast]").first().screenshot({ path: "scripts/toast.png" });
console.log("SCREENSHOT_SAVED scripts/toast.png");

await browser.close();
