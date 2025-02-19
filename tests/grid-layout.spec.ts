import { test, expect, devices } from "@playwright/test";

test("Grid ska ha 3 kolumner på desktop", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const grid = await page.locator(".grid-layout");
  const gridColumns = await grid.evaluate((el) =>
    window.getComputedStyle(el).getPropertyValue("grid-template-columns")
  );

  expect(gridColumns.split(" ").length).toBe(3);
});


test.use({ viewport: devices["iPhone 12"].viewport });
test("Grid ska ha 1 kolumn på mobil", async ({ page }) => {
	await page.goto("http://localhost:5173");
  
	const grid = await page.locator(".grid-layout");
	const gridColumns = await grid.evaluate((el) =>
	  window.getComputedStyle(el).getPropertyValue("grid-template-columns")
	);
  
	expect(gridColumns.split(" ").length).toBe(1);
  });
  

  test("Grid-layout ska inte gå utanför skärmen", async ({ page }) => {
	await page.goto("http://localhost:5173");
  
	const grid = await page.locator(".grid-layout");
	const box = await grid.boundingBox();
  
	expect(box).toBeTruthy();
	if (box) {
	  expect(box.x + box.width).toBeLessThanOrEqual(await page.evaluate(() => window.innerWidth));
	}
  });