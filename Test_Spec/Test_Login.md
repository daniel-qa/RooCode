## 測試目標：驗證使用者可以成功登入

## 測試環境
*   登入網址：https://my.net

## 測試步驟

1.  **操作：** 開啟登入頁面

2.  **操作：** 設定忽略 HTTPS 錯誤

加入下列程式

```
  // 這裡忽略所有 HTTPS 錯誤
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
```

3.  **操作：** 設定語系

加入下列程式

```
  // 設定 localStorage 中的 local 鍵
  await page.evaluate(() => {
    localStorage.setItem('local', 'zh-TW');
  });
   // 重新整理頁面
  await page.reload();
```

3.  **操作：** 點擊畫面上**含有「登入」文字**的區塊
    
4.  **操作：** 在第三方登入頁面中輸入帳密
     
     帳號輸入框的 id 是 "loginId"，密碼輸入框的 id 是 "loginPassword"

5.  **操作：** 點擊第三方登入頁面的登入按鈕 (button#loginButton), 並等待5秒   

6.  **操作:** 確認畫面上**含有「+ 新增」文字**的區塊


## 測試資料

*   使用者名稱：guest
*   密碼：123
