const Router = require("koa-router");
const router = new Router();
const gsearch_jsonapi = require('../model/gsearch_jsonapi');
const gsearch_cse = require('../model/gsearch_cse');

router.get("/gsearch/jsonapi", async (ctx, next) => {
    let data = "";
    if (ctx.query.q) {
        let q = encodeURIComponent(ctx.query.q)
        data = await gsearch_jsonapi(q)
        data = data ? data : ''
    }
    ctx.response.type = "application/json";
    ctx.response.body = data;
});

router.get("/gsearch/cse", async (ctx, next) => {
    let data = "";
    if (ctx.query.q) {
        let q = encodeURIComponent(ctx.query.q)
        data = await gsearch_cse(q)
        data = data ? data : ''
    }
    ctx.response.type = "application/javascript";
    ctx.response.body = data;
});

module.exports = router;
