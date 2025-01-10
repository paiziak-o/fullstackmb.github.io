import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the header and logo', async ({ page }) => {
    await page.goto('/');
    
    // Check logo
    const logo = page.locator('.logo-section a img');
    await expect(logo).toBeVisible();
    
    // Check header text
    const header = page.locator('.logo-text h1');
    await expect(header).toHaveText('Full Stack MB');
  });

  test('should display social media links', async ({ page }) => {
    await page.goto('/');
    
    // Check all social links are present
    const socialLinks = page.locator('.nav-links .nav-link');
    await expect(socialLinks).toHaveCount(6);
  });

  test('should load events from API', async ({ page }) => {
    await page.goto('/');
    
    // Check if events section exists
    const eventsSection = page.locator('.section.next-event');
    await expect(eventsSection).toBeVisible();
    
    // Either events are displayed or "no events" message is shown
    const hasEvents = await page.locator('.event-card-small').count() > 0;
    if (hasEvents) {
      const eventHeadings = page.locator('.event-card-small .event-card-content h3');
      const headingCount = await eventHeadings.count();
      for (let i = 0; i < headingCount; i++) {
        await expect(eventHeadings.nth(i)).toBeVisible();
      }
    } else {
      await expect(page.getByText('There are no events currently planned.')).toBeVisible();
    }
  });
});