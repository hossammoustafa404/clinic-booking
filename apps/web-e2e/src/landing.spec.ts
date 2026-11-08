import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('public landing page', () => {
  test('renders Arabic by default with a right-to-left document', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.getByRole('link', { name: /ابدأ مجانًا/ }).first(),
    ).toBeVisible();
  });

  test('renders English with a left-to-right document', async ({ page }) => {
    await page.goto('/?lang=en');

    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
    await expect(
      page.getByRole('heading', { name: /your clinic calendar/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /start free/i }).first(),
    ).toBeVisible();
  });

  test('shows the product brand in the hero', async ({ page }) => {
    await page.goto('/?lang=en');

    await expect(
      page.getByText('Clinic Booking', { exact: true }).first(),
    ).toBeVisible();
  });

  test('has no automatically detectable accessibility violations', async ({
    page,
  }) => {
    await page.goto('/?lang=en');

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
