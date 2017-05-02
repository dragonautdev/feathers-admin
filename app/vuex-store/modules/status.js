import * as types from '../mutation-types'
import NotificationGenerator from '../../utils/notifications'

/**
 * This is our local state, initialized from the localStorage according to
 * @type {Object}
 */
const state = {
  messages: []
}

const getters = {
  messages: state => state.messages,
  hasMesssages: state => state.messages.length == 0
}

const actions = {
  /**
   * This action logs the user in.
   */
  addMessage ({ commit, state }, message) {
    commit(types.ADD_STATUS_MESSAGE, message)
    NotificationGenerator.generateNotification(message, function(instance, toast) {
      commit(types.REMOVE_STATUS_MESSAGE, message)
    })
    return Promise.resolve(message)
  },
  removeMessage ({ commit, state }, message) {
    commit(types.REMOVE_STATUS_MESSAGE, message)
    return Promise.resolve(message)
  }
}

const mutations = {
  [types.ADD_STATUS_MESSAGE] (state, message) {
    state.messages.push(message)
  },
  [types.REMOVE_STATUS_MESSAGE] (state, message) {
    state.messages.splice(state.messages.indexOf(message), 1)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
