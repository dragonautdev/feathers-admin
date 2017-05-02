import Index from '../../components/common/Index.vue'

class Module {
  constructor(name, label, services = []) {
    this.name = name
    this.label = label
    this.services = services
  }

  get label() {
    return this.label || this.name
  }

  /**
   * This method adds a new service to this module.
   * @param {Service} service
   */
  addService(service) {
    this.services.push(service)
  }

  /**
   * Returns an array with the routes for this module
   */
  router() {
    let routes = []
    for (let index in this.services) {
      routes.push(this.services[index].routes())
    }
    return routes
  }
}

export default Module
