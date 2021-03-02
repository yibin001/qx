/*
Remove the WeChat public account bottom ad
by Choler
QX:
^https?:\/\/api\.instagram\.com url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js
*/

var obj = JSON.parse($response.body);

$done({body: JSON.stringify(obj)}); 
