// tests/Button.spec.ts
import { test, expect } from '@playwright/test';

test('Button should render with the correct label and emit clicked event', async ({ page }) => {
    // Navigate to the component URL
    await page.goto('http://localhost:3000'); // Ensure your app is running

    // Locate the button by its text label
    const button = await page.locator('button');
    await expect(button).toHaveText('Click Me'); // Make sure button has the correct text

    // Listen for the 'clicked' event (for testing purposes, we simulate this in Playwright)
    // Playwright cannot directly capture emitted events from Vue, so we can inspect the result (message)

    // Click the button
    await button.click();

    // Verify the result after button click (in your app this would update a message or other content)
    const message = await page.locator('p');
    await expect(message).toHaveText('Button clicked!');  // Check if the message is displayed after click
});
