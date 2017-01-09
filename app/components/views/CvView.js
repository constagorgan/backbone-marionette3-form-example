/* global $ */
import {Marionette} from '../../../vendor/vendor'
import template from '../../templates/cv.jst'
import HeaderView from './HeaderView'
import FooterView from './FooterView'

export default Marionette.View.extend({
  el: '#app',
  template: template,

  regions: {
    header: '#header',
    footer: '#footer'
  },

  events: {

  },

  onRender: function () {
    $(window).scrollTop(0)

    this.showChildView('header', new HeaderView())
    this.showChildView('footer', new FooterView())
  }
})
