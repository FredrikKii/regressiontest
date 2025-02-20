import { test, expect, Page, Locator, devices } from '@playwright/test';

test('Testar att sidebaren inte har förändrats', async ({ page }: { page: Page }) => {
    await page.goto('http://localhost:5173');

    const sidebar: Locator = page.locator('.sidebar');
    expect(await sidebar.screenshot()).toMatchSnapshot('sidebar.png');
});


test.describe("Mobilvy (iPhone 12)", () => {
  test.use({ viewport: devices["iPhone 12"].viewport });

  test("Sidebaren ska ersättas av hamburgarmenyn", async ({ page }: { page: Page }) => {
    await page.goto("http://localhost:5173");

    await expect(page.locator(".hamburger-menu")).toBeVisible();
    await expect(page.locator(".sidebar")).toBeHidden();
  });
});


test("Sidebar ska inte täcka korten", async ({ page }: { page: Page }) => {
    await page.goto("http://localhost:5173");

    const sidebar = await page.locator(".sidebar").boundingBox();
    const firstCard = await page.locator(".homecards").first().boundingBox();

    expect(sidebar).not.toBeNull();
    expect(firstCard).not.toBeNull();

    if (sidebar && firstCard) {
        expect(sidebar.y + sidebar.height).toBeLessThanOrEqual(firstCard.y);
    }
});
