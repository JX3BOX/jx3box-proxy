const Router = require('koa-router');
const router = new Router()

router.get('/',async (ctx,next) => {
    // console.log(ctx.req)
    ctx.response.body = 'Hello JX3BOX'
})

module.exports = router