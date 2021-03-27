# WebPreviewer

##### 先備資源

###### AWS lambda function and API gateway
* 進入 aws lambda 頁面
* 建立函式
* 執行語言選擇 **Node.js 10.x**
* 進入該函式
* 點選新增觸發
* 選取 API Gateway
* 點選建立 API
* API 類型選擇 **HTTP API**
* 安全性選取**開啟**
* 打開其他設置
* 勾選 **跨原始資源共用 (CORS)**
* 儲存
* 記下 API 終端節點網址

###### telegram bot token
  
 * telegram 搜尋 botFather
 * 創建一個新的 bot 或是編輯已有的 bot
 * 取得 bot 的 token，記下來

###### 設置 telegram bot webhook
* `https://api.telegram.org/bot<你的機器人token>/setWebHook?url=<API 終端節點網址>`
* 會像是這樣`https://api.telegram.org/bot1670f216885:AAE-VpfffffffYmeiMcxt8fPC-f41w/setWebHook?url=https://j5833gctb9.execute-api.us-east-1.amazonaws.com/default/mytelebot`


##### 如何使用程式碼
* pull code 到本地
* 專案資料夾 執行 npm install
* 複製專案內的 config.example.json 重新命名為 config.json
* 打開 config.json, 將 bot token 貼到 BOT_TOKEN 上
* 將專案 zip 起來
* 回到 AWS lambda
* 打開剛才建立好的函式
* 切到 程式碼 這個 tab
* 點選上傳於 > .zip 檔案
* 選取剛才zip好的專案
