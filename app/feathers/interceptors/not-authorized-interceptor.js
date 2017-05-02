/**
 * This interceptor checks if there's a 401 error and redirects the user to the login
 * page, if not already there.
 * @param  {Object} error An XHTTP error emitted by axios
 * @return {Object} Promise rejection so other interceptors can be chained.
 */
export default function (error) {
  let router = window.app.$root.$router
  let route = window.app.$root.$route
  if (error.response.status == 401 && route.name != 'admin.login') {
    window.app.$root.$router.push({name: 'admin.login', query: {
      next: window.app.$root.$route.fullPath
    }})
  }
  return Promise.reject(error)
}
