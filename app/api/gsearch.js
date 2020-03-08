const Router = require("koa-router");
const router = new Router();
const gsearch_jsonapi = require('../model/gsearch_jsonapi');
const gsearch_cseapi = require('../model/gsearch_cseapi');

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

router.get("/gsearch/cseapi", async (ctx, next) => {
    let data = "";
    if (ctx.query.q) {
        let q = encodeURIComponent(ctx.query.q)
        console.log(`[gsearch/cseapi] parse query : ${q}`)
        let res = await gsearch_cseapi(q)
        // console.log(res.data)
        data = res ? res.data : ''
    }
    ctx.response.type = "application/javascript";
    ctx.response.body = data;
});

router.get("/gsearch", async (ctx, next) => {
    let data = `
    <div class="gcse-searchresults-only"></div>
    <script
        async
        src="https://cse.google.com/cse.js?cx=011450975203877314992:itycvatvhcp"
    ></script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .gsc-control-cse {
            padding-top: 0;
        }
    </style>
    `
    ctx.response.type = "text/html";
    ctx.response.body = data;
});


module.exports = router;
