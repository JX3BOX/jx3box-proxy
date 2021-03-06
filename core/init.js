const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManager{

    static initCore(app){
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadConfig()
    }

    static loadConfig(){
        const envPath = process.cwd() + '/env.js'
        const env = require(envPath);
        global.__env = env
    }

    static initLoadRouters(){
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module,apiDirectory,{visit:whenLoadModule})
        function whenLoadModule(obj){
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }

}

module.exports = InitManager