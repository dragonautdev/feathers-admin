import state from '../../vuex-store'

export default function (config) {
  if (state.getters.isLoggedIn) {
    Object.assign(config.headers, {Authorization : state.getters.token})
  }
  return config
}
