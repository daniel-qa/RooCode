import { test, expect } from '@playwright/test';

test('使用者可以成功登入', async ({ browser }) => {
  // 1. 開啟登入頁面
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  await page.goto('https://my.net');

  // 2. 設定忽略 HTTPS 錯誤
  // (已在 newContext 中設定)

  // 3. 設定語系
  await page.evaluate(() => {
    localStorage.setItem('local', 'zh-TW');
  });
  await page.reload();

  // 4. 點擊畫面上含有「登入」文字的區塊
  await page.getByText('登入').click();

  // 5. 在第三方登入頁面中輸入帳密
  await page.locator('input#loginId').fill('guest');
  await page.locator('input#loginPassword').fill('123');

  // 6. 點擊第三方登入頁面的登入按鈕 (button#loginButton), 並等待5秒
  await page.locator('button#loginButton').click();
  await page.waitForTimeout(5000);

  // 7. 確認畫面上含有「+ 新增」文字的區塊
  await expect(page.getByText('+ 新增')).toBeVisible();
});
