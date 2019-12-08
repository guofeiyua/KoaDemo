const Router = require('koa-router')
const router = new Router()
const {HttpException} = require('../../../core/http-exception')
router.post('/v1/classic/latest/:id', (ctx, next) => {

    if(true) {
        const error = new HttpException('出现了错误', 10001, 400)
        throw error
    }
    ctx.body = {
        key: 'classic'
    }
})
module.exports = router