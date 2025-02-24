import { test, expect } from '@playwright/test';

test('Faktureringssidan ser korrekt ut', async ({ page }) => {
    await page.goto('http://localhost:5173/fakturering');
    expect(await page.screenshot()).toMatchSnapshot('fakturering.png');
});
