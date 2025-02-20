import { test, expect, Page, Locator } from "@playwright/test";

interface Viewport {
  name: string;
  width: number;
  height: number;
}

const viewports: Viewport[] = [
  { name: "Desktop", width: 1920, height: 1080 },
  { name: "Laptop", width: 1366, height: 768 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Mobile", width: 360, height: 640 },
];

viewports.forEach((device: Viewport) => {
  test.describe(`${device.name}`, () => {
    test.use({ viewport: { width: device.width, height: device.height } });

    test("Grid ska ha rätt antal kolumner", async ({ page }: { page: Page }) => {
      await page.goto("http://localhost:5173");

      const grid: Locator = page.locator(".grid-layout");
      const gridColumns: string = await grid.evaluate((el) =>
        window.getComputedStyle(el).getPropertyValue("grid-template-columns")
      );

      const columnCount: number = gridColumns.split(" ").length;

      if (device.width >= 1366) {
        expect(columnCount).toBe(3);
      } else if (device.width >= 768) {
        expect(columnCount).toBe(2);
      } else {
        expect(columnCount).toBe(1);
      }
    });

    test("Grid-layout ska inte gå utanför skärmen", async ({ page }: { page: Page }) => {
      await page.goto("http://localhost:5173");

      const grid: Locator = page.locator(".grid-layout");
      const box = await grid.boundingBox();

      expect(box).not.toBeNull();
      if (box) {
        expect(box.x + box.width).toBeLessThanOrEqual(
          await page.evaluate(() => window.innerWidth)
        );
      }
    });
  });
});
