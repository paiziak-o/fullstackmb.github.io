import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the header and logo', async ({ page }) => {
    await page.goto('/');
    
    // Check logo
    const logo = page.locator('.logo-menu img');
    await expect(logo).toBeVisible();
    
    // Check header text
    const header = page.locator('.motto header');
    await expect(header).toHaveText('Full Stack MB');
  });

  test('should display social media links', async ({ page }) => {
    await page.goto('/');
    
    // Check all social links are present
    const socialLinks = page.locator('.social-icons .sm-link');
    await expect(socialLinks).toHaveCount(6);
  });

  test('should load events from API', async ({ page }) => {
    await page.goto('/');
    
    // Check if events section exists
    const eventsSection = page.locator('section.next-event');
    await expect(eventsSection).toBeVisible();
    
    // Either events are displayed or "no events" message is shown
    const hasEvents = await page.locator('article.event-info').count() > 0;
    if (hasEvents) {
      await expect(page.locator('article.event-info .title')).toBeVisible();
    } else {
      await expect(page.getByText('There are no events currently planned.')).toBeVisible();
    }
  });
});