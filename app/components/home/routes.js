import Home from './Home.vue'

export default [
  {
    path: '',
    component: Home,
    name: 'admin.home',
    meta: { loginRequired: true }
  }

]
