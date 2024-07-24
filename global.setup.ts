import { chromium, type FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0]!.use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(baseURL!);
    await page.getByPlaceholder("email@address.com").click();
    await page.getByPlaceholder("email@address.com").fill("e2e@malou.io");
    await page.locator('input[type="password"]').click();
    await page.locator('input[type="password"]').fill(process.env.MALOU_E2E_PASSWORD!);
    await page.getByRole("button", { name: "Log in" }).click();
    await page.locator('app-notifications-modal div').filter({ hasText: 'Notifications' }).getByRole('button').click();
    await page.context().storageState({ path: storageState as string });
    await browser.close();
}

export default globalSetup;
