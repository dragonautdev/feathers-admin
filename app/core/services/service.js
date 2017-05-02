import Index from '../../components/common/Index.vue'
import List from '../../components/list/List.vue'

const Create = {}

/**
 * This class represents a basic FeathersJS Service. It has a unique name (kebap-cased),
 * and optional labels for both single and plural instances
 */
class Service {
  constructor(name='',label='', labelPlural='', options = {}) {
    this.name = name
    this.label = label
    this.labelPlural = labelPlural,
    this.options = {
      create: true,
      update: true,
      list: true,
      delete: true
    }
    Object.assign(this.options, options)
    this._routes = {
      list: {
        name: this.name,
        component: List,
        path: '',
        meta: {
          loginRequired: true,
          service: service
        }
      },
      create: {
        name: this.name + '.create',
        component: Create,
        path: 'create',
        meta: {
          loginRequired: true,
          service: service
        }
      },
      update: {
        name: this.name + '.update',
        component: Create,
        props: true,
        path: ':id',
        meta: {
          loginRequired: true,
          service: service
        }
      }
    }
  }

  get routes() {
    return this._routes
  }
  
  /**
   * this method returns the routes for our service
   */
  router() {
    let service = this
    let routes = [
      {
        path: this.name,
        component: Index
        children: []
      }
    ]
    if (service.options.list) {
      routes.children.push(service.routes.list)
    }
    if (service.options.create) {
      routes.children.push(service.routes.create)
    }
    if (service.options.update) {
      routes.children.push(service.routes.update)
    }

    return routes
  }
}

export default Service
