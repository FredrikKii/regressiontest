import { test, expect } from '@playwright/test';

test('Homepage should match baseline', async ({ page }) => {
    await page.goto('http://localhost:5173');  // Byt ut till din egen URL
    expect(await page.screenshot()).toMatchSnapshot('homepage.png'); // Jämför med baseline
});