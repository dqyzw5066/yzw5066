/*
QX:

[Rewrite_local]
^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) url script-response-body https://raw.githubusercontent.com/dqyzw5066/yzw5066/master/yyzs.js



[MITM]
hostname = newdrugs.dxy.cn
*/

const path1 = "/snsapi/username/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init?timestamp=";

const url = $requires.url;
let body = $response.body;

if (url.indexOf(path1) != -1){
body = JSON.parse(body);
body.items.expertUser = true;
body.items.expert = true;
body.items.expertStatus = 1;
body.items.professional = true;
body = JSON.stringify(body);
}

if (url.indexOf(path2) != -1){
body = JSON.parse(body);
body.data.isActive = true;
body = JSON.stringify(body);
}

if (url.indexOf(path3) != -1){
body = JSON.parse(body);
body.data.isProActive = true;
body.data.expireDate = 2048;
body.data.memberDiscount = true;
body.data.iapPurchaseVO.purchase = true;
body.data.iapPurchaseVO.message = null;
body.data.iapPurchaseVO.error = null;
body = JSON.stringify(body);
}

$done({body})

// by Primovist
