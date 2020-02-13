/**
 * 功能描述：logger
 * 2019-08-12
 * 作者：xiongmeng
 */
var log4js = require('log4js');
var json = require('./log4js.config.js');
var fs = require("fs");
//配置log日志信息
//判断日志存储路径是否存在
var jsonexist = fs.existsSync(json.appenders.dateFile.filename);
if (!jsonexist) {
    json.appenders.dateFile.filename = "./logs/log";
}
log4js.configure(json);
var logger = log4js.getLogger('日志信息');
// logger.level = 'info'
console.log('日志信息logger')
module.exports = logger;