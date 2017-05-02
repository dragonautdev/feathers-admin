import Site from '../app'

const plugin = {
  install (Vue, options) {
    Vue.prototype.$site = Site
  }
}

export default plugin
