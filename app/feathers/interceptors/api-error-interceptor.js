import VuexStore from '../../vuex-store'

/**
 * This interceptor handles general API errors by logging their data to the console
 * and showing an error message.
 * @param  {Object} error An error object generated by axios
 * @return {Promise} Promise rejection so that more interceptors can be chained together
 */
export default function (error) {
  console.log({
    type: 'API ERROR',
    status: error.response.status,
    url: error.config.url,
    headers: error.config.headers,
    data: error.config.data,
    details: error.response.data

  })
  VuexStore.dispatch('addMessage', {
    title: 'There was a problem',
    text: (error.response) ? error.response.data.message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
}