/* global sessionStorage */
import {Marionette} from '../../../vendor/vendor'
import {Backbone} from '../../../vendor/vendor'
import template from '../../templates/header.jst'

export default Marionette.View.extend({
  template: template,
  templateContext: {
    userName: sessionStorage.userName
  },

  events: {

  }

})
