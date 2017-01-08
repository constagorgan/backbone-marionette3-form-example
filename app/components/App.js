import {Backbone} from '../../vendor/vendor'
import {Marionette} from '../../vendor/vendor'
import Router from './Router'
import Controller from './Controller'

export default Marionette.Application.extend({
  region: '#app',

  initialize () {
    this.on('start', () => {
      this.Router = new Router({
        controller: new Controller()
      })
      Backbone.history.start()
    })
  }
})
