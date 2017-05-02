import Service from './service'

class ModelService extends Service {
  constructor(name='', model={}, label='', labelPlural='') {
    super(name, label, labelPlural)
    this.model = model
  }

  get label() {
    return this.label || this.model.label
  }

  get labelPlural() {
    return this.labelPlural || this.model.labelPlural
  }

}

export default ModelService
