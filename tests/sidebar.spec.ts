import { test, expect, devices } from '@playwright/test';

test('Testar att sidebaren inte har förändrats', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const navbar = await page.locator('.sidebar');

    expect(await navbar.screenshot()).toMatchSnapshot('navbar.png');
});

test.use({ viewport: devices["iPhone 12"].viewport });

test("Testa att sidebaren försvinner för att få en hamburgarmeny istället på en iPhone 12", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page.locator(".hamburger-menu")).toBeVisible();
  await expect(page.locator(".sidebar")).toBeHidden();
});


test("Testa att sidebar inte täcker korten", async ({ page }) => {
	await page.goto("http://localhost:5173");
  
	const sidebar = await page.locator(".sidebar").boundingBox();
	const firstCard = await page.locator(".homecards").first().boundingBox();
  
	expect(sidebar).toBeTruthy();
	expect(firstCard).toBeTruthy();
  
	if (sidebar && firstCard) {
	  expect(sidebar.y + sidebar.height).toBeLessThanOrEqual(firstCard.y);
	}
  });