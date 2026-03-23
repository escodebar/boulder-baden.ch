import { test, expect } from "@playwright/test";

test.skip(({ isMobile }) => !isMobile, "This test requires a mobile device");

test("navigation button toggles navigation", async ({ page }) => {
  await page.goto("/");

  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).not.toBeVisible();

  const button = page.getByRole("button", { name: "Navigation" });
  await button.tap();
  await expect(dialog).toBeVisible();

  await button.tap();
  await expect(dialog).not.toBeVisible();
});

test("tapping outside the dialog closes the navigation", async ({ page }) => {
  await page.goto("/");

  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).not.toBeVisible();

  const button = page.getByRole("button", { name: "Navigation" });
  await button.tap();
  await expect(dialog).toBeVisible();

  await dialog.tap({ position: { x: 10, y: 10 } });

  await expect(dialog).not.toBeVisible();
});
