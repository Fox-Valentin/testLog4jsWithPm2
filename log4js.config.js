var isDev = process.env.SERVICE_INGRESS ? false : true;
var appenders;
if (isDev) {
    appenders = ["dateFile", "out", "console"]
} else {
    appenders = ["dateFile", "out", "console"]
};

module.exports = {
    "appenders": {
        "dateFile": {
            "type": "dateFile",
            "category": "log_dataFile",
            "filename": "./logs/log",
            "maxLogSize": 1000,
            "backups": 3,
            "encoding": "utf-8",
            "numBackups": 5,
            "pattern": "-yyyy-MM-dd-hh.log",
            "alwaysIncludePattern": true,
            "replaceConsole": true
        },
        "out": {
            "type": "stdout"
        },
        "console": {
            "type": "console"
        }
    },
    "categories": {
        "default": { "appenders": appenders, "level": "info" }
    }
}