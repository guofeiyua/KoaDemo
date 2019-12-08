const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManger {
    static initCore(app) {
        InitManger.app = app
        InitManger.initLoadRouters()
    }
    static initLoadRouters() {
        //获取绝对路径
        const apiPath = `${process.cwd()}/app/api`
        const modules = requireDirectory(module, apiPath, {
            visit: whenModuleLoad
        })
        function whenModuleLoad(obj) {
            if(obj instanceof Router) {
                InitManger.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManger