const commonLib = require('./commonLib');
let HTMLParser = require('node-html-parser');

module.exports = (function(){
    return {
        getInfo: async function(url) {
            try {
                const ret = await commonLib.doRequest(url, {}, 'get');
                const productPage = HTMLParser.parse(ret);

                const imgInfo = productPage.querySelectorAll('.prod_img');

                const detail = imgInfo[0].querySelector('img');
                return detail;
            } catch (e) {
                console.log(e);
            }
        },
    }
})();

