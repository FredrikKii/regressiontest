import { test, expect } from '@playwright/test';

test('Testa att hemskärmen matchar Baseline', async ({ page }) => {
    await page.goto('http://localhost:5173');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
});