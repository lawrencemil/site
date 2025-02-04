import { test, expect } from '@playwright/test';
import { BASE_URL } from './config';

test.describe('theme switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should switch to dark mode based on device settings', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    const backgroundColor = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(backgroundColor).toBe('rgb(18, 18, 18)');
  });

  test('should switch to light mode based on device settings', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.reload();
    const backgroundColor = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(backgroundColor).toBe('rgb(254, 254, 254)');
  });

  test('should apply correct styles for dark mode', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    const footerBackgroundColor = await page.evaluate(() => getComputedStyle(document.querySelector('footer')).backgroundColor);
    expect(footerBackgroundColor).toBe('rgb(30, 30, 30)');
  });

  test('should apply correct styles for light mode', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.reload();
    const footerBackgroundColor = await page.evaluate(() => getComputedStyle(document.querySelector('footer')).backgroundColor);
    expect(footerBackgroundColor).toBe('rgb(238, 238, 238)');
  });
});
