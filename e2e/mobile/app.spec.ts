import { test, expect } from "@playwright/test";

test.skip(({ isMobile }) => !isMobile, "This test requires a mobile device");

test("display navigation dialog when tapping on button", async ({ page }) => {
  await page.goto("/");

  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).not.toBeVisible();

  await page.getByRole("button", { name: "Navigation" }).tap();

  await expect(dialog).toBeVisible();
});
