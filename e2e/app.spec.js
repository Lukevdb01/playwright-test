// tests/App.spec.ts
import { test, expect } from '@playwright/test';

test('App Component should render Button and handle click event', async ({ page }) => {
    // Start the app in the browser
    await page.goto('http://localhost:5173');  // Adjust the URL if different

    // Verify that the button is rendered with the correct label
    const button = await page.locator('button');
    await expect(button).toHaveText('Click Me');

    // Click the button and check if the message appears
    await button.click();

    // Check if the message is displayed after button click
    const message = await page.locator('p');
    await expect(message).toHaveText('Button clicked!');
});
