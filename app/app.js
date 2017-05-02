import Site from './core/admin/site'
import config from './config'
import modules from './modules'

let app = new Site(config.appTitle)

for (let index in modules) {
  app.register(modules[index])
}

export default app
