import { test } from '@playwright/test';

test('create restaurant', async ({ page }) => {
  await page.goto('/restaurants/list');
  await page.getByRole('button', { name: 'Add a business' }).click();
  await page.getByRole('button', { name: 'Connect with Google' }).click();
  await page.getByText('e2e-malou').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Edit settings' }).click();
  await page.getByLabel('Email or phone').fill('fantin@malou.io');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').fill(process.env.GMAIL_PASSWORD!);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Continuer' }).click();
  await page.getByRole('button', { name: 'Autoriser' }).click();
  await page.getByText('e2e-malou').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByText('fantin@malou.io').click();
  await page.locator('label').filter({ hasText: 'Le Nina 8 rue ledru rollin' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Later' }).click();
});