import { test, expect, Page } from '@playwright/test';

test('Sidebar ska visa upp BL-logga', async ({ page }: { page: Page }) => {
    await page.goto('http://localhost:5173');

    const logo = page.locator('.sidebar .logo');

    await expect(logo).toBeVisible();
});


test('Sidebar ska ha en lista med flera länkar', async ({ page }: { page: Page }) => {
    await page.goto('http://localhost:5173');

    const nav = page.locator('.nav');
    await expect(nav).toBeVisible();

    const ul = nav.locator('ul');
    await expect(ul).toBeVisible();

	const listItems = ul.locator('li');
    await expect(listItems).toHaveCount(7);
});