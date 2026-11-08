import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('platform console', () => {
  test('renders Arabic by default with a right-to-left document', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(
      page.getByRole('heading', { level: 1, name: /نظرة عامة/ }),
    ).toBeVisible();
  });

  test('renders English with a left-to-right document', async ({ page }) => {
    await page.goto('/?lang=en');

    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
    await expect(
      page.getByRole('heading', { level: 1, name: /platform overview/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /needs attention/i }),
    ).toBeVisible();
  });

  test('shows clinic overview content', async ({ page }) => {
    await page.goto('/?lang=en');

    await expect(page.getByText(/active clinics/i)).toBeVisible();
    await expect(page.getByText(/recently joined clinics/i)).toBeVisible();
  });

  test('has no automatically detectable accessibility violations', async ({
    page,
  }) => {
    await page.goto('/?lang=en');

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
