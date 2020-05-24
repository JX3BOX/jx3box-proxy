const Router = require('koa-router');
const router = new Router()
const axios = require('axios');
axios.defaults.timeout =  10000;

router.get('/github',async (ctx,next) => {

    let repo = ctx.query.repo

    if(!repo) return

    let result = await axios.get('https://api.github.com/repos/JX3BOX/'+repo).catch((err) => {
        console.log(err)
    })

    if(result){
        ctx.response.body = result.data
    }else{
        ctx.response.body = 'Github连接超时'
    }
})

module.exports = router