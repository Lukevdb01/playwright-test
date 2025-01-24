// tests/playwright/mobileTest.js
import { webkit, devices } from 'playwright';

(async () => {
    // Launch browser in headless mode
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext({
        ...devices['iPhone 12'], // Emulate iPhone 12
    });

    // Create a new page
    const page = await context.newPage();

    // Go to your Vue app (make sure your app is running)
    await page.goto('http://localhost:5173'); // Adjust if you use a different dev server URL

    // Perform any actions you want to test
    // Example: Check if a certain element exists
    const exists = await page.isVisible('text="Some Text"');
    console.log('Text exists:', exists);

    // Close the browser after a few seconds
    await page.waitForTimeout(5000);
    await browser.close();
})();
