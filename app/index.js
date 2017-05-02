import moment from 'moment'
import countriesList from 'countries-list'

import Vue from 'vue'
import Router from 'vue-router'
import 'vueify/lib/insert-css'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'

import routes from './config/routes'
import routerHooks from './config/routes/hooks'
import App from './App'
import store from './vuex-store'
import translations from './i18n'

import SitePlugin from './vue-admin-site'


Vue.use(Router)
// setup vee-validate
Vue.use(VeeValidate)
Vue.use(SitePlugin)
// setup vue-i18n
//Vue.use(VueI18n)

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'is-active'
})

// Add the loginRequired hook before each state transition
router.beforeEach(routerHooks.loginRequired)
router.afterEach(routerHooks.changeTitle)

// Translations
/*const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations
})*/

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
})

app.$mount('#app')

window.app = app
