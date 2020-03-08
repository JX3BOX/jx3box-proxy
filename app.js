const Koa = require('koa');
const cors = require('koa2-cors');
const { accessLogger } = require('./middlewares/logger');
const parser = require('koa-bodyparser');

const InitManager = require('./core/init');
const catchError = require('./middlewares/exception');

const app = new Koa();

//全局错误处理
app.use(catchError)

//允许跨域
app.use(cors())

//日志logger
app.use(accessLogger());

//解析body
app.use(parser())

//处理
InitManager.initCore(app)

app.listen(1024)
console.log('jx3box proxy is running on http://localhost:1024')