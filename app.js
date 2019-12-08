const Koa = require('koa')
const InitManger = require('./core/init')
const catchError = require('./middlewares/exception')
const app = new Koa()


app.use(catchError)
InitManger.initCore(app)


// 主题 是渐进式的 核心的主要的
// api是具有版本的 每个版本返回的内容可能是不一致的
// v1 v2 支持版本号，版本号的方式：1。路径 2.查询参数 3.header
// 开闭原则 修改是关闭的 扩展是开放的 

app.listen(3000)