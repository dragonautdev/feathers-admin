/**
 * This class implements the main interface for our admin application. Has
 * knowledge of the modules.
 */
class Site {
  constructor (name) {
    this.name = name
    this.children = []
  }

  register (module) {
    this.children.push(module)
  }

  /**
   * creates an array with the routes of all our modules.
   * @return {Array} an array containing the route objects for all our modules and services
   */
  routes() {
    let routes = []
    for (index in this.children) {
      routes.push(this.children[index].routes()))
    }
    return routes
  }

}
