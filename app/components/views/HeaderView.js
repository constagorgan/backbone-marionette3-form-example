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
    'click .header_btn': 'toggleSideMenu'
  },
  toggleSideMenu: function (e) {
//    if($('.menu_mobile').hasClass('display_inline_block')) {
      if($('.menu_mobile').hasClass('display_inline_block')) {
      $(event.target).removeClass('header_btn_close')
      $('.menu_mobile').removeClass('display_inline_block')
    } else {
      $(event.target).addClass('header_btn_close')
      $('.menu_mobile').addClass('display_inline_block')
    }
  }
})
