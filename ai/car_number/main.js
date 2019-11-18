var AipOcrClient = require('baidu-aip-sdk').ocr; //图片识别？从图片中提取文字
var fs = require('fs');
var image = fs.readFileSync('./car1.jpg').toString('base64');//文件本身就是二进制文本

var APP_ID = "17799057";
var API_KEY = "AsTbPpxggwluAkCxG0E4zFBP";
var SECRET_KEY = "GAnLlGA5lPloxYdz8cicGjvj3oU6xTFw";

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
var options = {};
client.licensePlate(image, options).then(function(result) {
  
  console.log(result)
})
.catch(function(err) {
  console.log(err);
})
