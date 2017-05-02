import Login from './Login.vue'
import Signup from './Signup.vue'

export default [
  {
    name: 'admin.login',
    path: 'login',
    component: Login,
    meta: {
      loginRequired: false,
      title: 'Iniciá Sesión'
    }
  },
  {
    name: 'admin.signup',
    path: 'signup',
    component: Signup,
    meta: {
      loginRequired: false,
      title: 'Registrate'
    }
  }
]
