// Environment
import {Backbone} from '../../vendor/vendor'
import {Marionette} from '../../vendor/vendor'
// Services
import Ws from './Ws'
// Views
import JobAlertsView from './views/JobAlertsView'
import CvView from './views/CvView'
import FavoritesView from './views/FavoritesView'
import AccountInformationView from './views/AccountInformationView'
import LogoutView from './views/LogoutView'

export default Marionette.Object.extend({

  // ----------------------------------------
  // --- REUSABLE CODE FOR OTHER PROJECTS ---
  // ----------------------------------------
  //
  //  chooseHomepage: function () {
  //    if (sessionStorage.token || localStorage.token) {
  //      Backbone.history.navigate('homepage_connected', {
  //        trigger: true
  //      })
  //    } else {
  //      Backbone.history.navigate('homepage', {
  //        trigger: true
  //      })
  //    }
  //  },
  //
  // ----------------------------------------
  // --- REUSABLE CODE FOR OTHER PROJECTS ---
  // ----------------------------------------

  chooseHomepage: function () {
    Backbone.history.navigate('account_information', {
      trigger: true
    })
  },
  jobAlerts: function () {
    const jobAlertsView = new JobAlertsView()
    jobAlertsView.render()
  },
  cv: function () {
    const cvView = new CvView()
    cvView.render()
  },
  favorites: function () {
    const favoritesView = new FavoritesView()
    favoritesView.render()
  },
  accountInformation: function () {
    //  Fill the info fields according to account details
    //    $('#loader').show()
    //    Ws.userInfo(function (response) {
    //      const accountInformationView = new AccountInformationView({
    //        response: response
    //      })
    //      $('#loader').hide()
    //      accountInformationView.render()
    //    }, function (response) {
    //      $('#loader').hide()
    //      // Error handling implementation
    //    })
    const accountInformationView = new AccountInformationView()
    accountInformationView.render()
  },
  logout: function () {
    const logoutView = new LogoutView()
    logoutView.render()
  }
})
