const {HttpException} = require('../utils/http-exception');

const catchError = async (ctx,next) => {
    try{
        await next()
    }catch(error){
        if(global.__env == 'dev'){
            throw error
        }
        if(error instanceof HttpException){
            ctx.body = {
                msg : error.msg,
                error_code : error.errorCode,
                request : `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }else{
            ctx.body = {
                msg : '服务器内部错误',
                error_code : 999,
                request : `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError