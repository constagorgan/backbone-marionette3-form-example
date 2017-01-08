import {Marionette} from '../../vendor/vendor'
import Controller from './Controller'

export default Marionette.AppRouter.extend({
  controller: Controller,

// ----------------------------------------
// --- REUSABLE CODE FOR OTHER PROJECTS ---
// ----------------------------------------
//
// Code to execute 1st before app start
//  execute: function (callback, args) {
//    // Allow user access these URLs without being logged in:
//    var allowedURLs = ["#homepage", "#login", "#signup", "#forgot_password", "#legal", "#contact", ""]
//    var windowLocation = window.location.hash
//    if (allowedURLs.indexOf(window.location.hash) >= 0) {
//      if (sessionStorage.token) {
//      callback.apply(this, args)
//      } else if (localStorage.token) {
//        sessionStorage.token = localStorage.token
//        sessionStorage.userName = localStorage.userName
//        sessionStorage.userEmail = localStorage.userEmail
//        callback.apply(this, args)
//      } else {
//        sessionStorage.redirectFrom = window.location.hash
//        window.location.hash = "#login"
//      }
//    }
//  },

//  appRoutes: {
//    '': 'chooseHomepage',
//    'homepage': 'homepage',
//    'homepage_connected': 'homepageConnected',
//    'login': 'login',
//    'signup': 'signup',
//    'legal': 'legal',
//    'contact': 'contact',
//    'profile': 'profile',
//    'forgot_password': 'forgotPassword',
//    'forgot_password_info': 'forgotPasswordInfo',
//    'forgot_password_email/:resetToken': 'forgotPasswordEmail',
//    'modify_account': 'modifyAccount',
//    'modify_account_password': 'modifyAccountPassword'
//  }
//
// ----------------------------------------
// --- REUSABLE CODE FOR OTHER PROJECTS ---
// ----------------------------------------

  appRoutes: {
    '': 'chooseHomepage',
    'job_alerts': 'jobAlerts',
    'cv': 'cv',
    'favorites': 'favorites',
    'account_information': 'accountInformation',
    'logout': 'logout'
  }
})
