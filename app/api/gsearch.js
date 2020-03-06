const Router = require("koa-router");
const router = new Router();
const gsearch_jsonapi = require('../model/gsearch_jsonapi');
const gsearch_cse = require('../model/gsearch_cse');

router.get("/gsearch/jsonapi", async (ctx, next) => {
    let data = "";
    if (ctx.query.q) {
        let q = encodeURIComponent(ctx.query.q)
        console.log(`[gsearch/jsonapi] parse query : ${q}`)
        let res = await gsearch_jsonapi(q)
        // console.dir(res.data)
        data = res ? res.data : ''
    }
    ctx.response.type = "application/json";
    ctx.response.body = data;
});

router.get("/gsearch/cse", async (ctx, next) => {
    let data = "";
    if (ctx.query.q) {
        let q = encodeURIComponent(ctx.query.q)
        console.log(`[gsearch/cseapi] parse query : ${q}`)
        let res = await gsearch_cse(q)
        // console.log(res.data)
        data = res ? res.data : ''
    }
    ctx.response.type = "application/javascript";
    ctx.response.body = data;
});

module.exports = router;
