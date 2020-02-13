module.exports = {
    apps: [{
        name: 'myapp', //应用名
        script: './app.js', //应用文件位置
        cwd: '/usr/opt',
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false, //监听模式
        output: '/app/log/output.log', //指定日志标准输出文件及位置
        error: '/app/log/error.log', //错误输出日志文件及位置，pm2 install pm2-logrotate进行日志文件拆分
        log_date_format: "YYYY-MM-DD HH:mm Z" //日志日期记录格式
    }]
};