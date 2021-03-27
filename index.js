const { Telegraf } = require('telegraf')
const config = require('./config.json');
const pchomeParser = require('./pchomeParser.js');

const webPreviewer = (function() {
    return {
        bot: new Telegraf(config.BOT_TOKEN),
        chatID: null,
        receiveTextMsg: null,
        getMessageType: function (message) {
            const pcHomeTestReg = /https:\/\/24h(\.m)*\.pchome\.com\.tw\/prod\//;
            if (pcHomeTestReg.test(message)) {
                return 'pchomeUrl';
            }

            return;
        },
        sendMessageToTelegram: function (chatID, message) {
            this.bot.telegram.sendMessage(chatID, message);
        },
        handleReceiveMessage: async function(event) {
            const reqBody = JSON.parse(event.body);

            this.chatID = reqBody.message.chat.id;
            this.receiveTextMsg = reqBody.message.text || null;
            if (this.receiveTextMsg === null) {
                return;
            }

            const msgType = this.getMessageType(this.receiveTextMsg);
            if (typeof msgType === 'undefined') {
                return;
            }

            if (msgType === 'pchomeUrl') {
                try {
                    this.sendMessageToTelegram(this.chatID, 'is a pchomeUrl');
                    const pchomeInfo = await pchomeParser.getInfo(this.receiveTextMsg);
                    console.log(pchomeInfo);
                } catch (e) {
                    console.log(e);
                }
            }

            return new Promise(async resolve => {
                console.log('resoleve');
            })
        },
    };
})();

exports.handler = async function(event) {
    await webPreviewer.handleReceiveMessage(event);
};

