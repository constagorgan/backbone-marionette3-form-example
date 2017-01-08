/* global $, sessionStorage */
import {baseUrl} from './Config'

$.ajaxSetup({ timeout: 30000 })

export default class Ws {
  static login (email, password, success, error) {
    var url = baseUrl + '/auth/login'
    var dataPassed = JSON.stringify({
      email: email,
      password: password
    })
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: url,
      data: dataPassed,
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('Error occurred on login')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static signup (field1, field2, field3, success, error) {
    var url = baseUrl + '/signup'
    var dataPassed = JSON.stringify({
      field1: field1,
      field2: field2,
      field3: field3
    })
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: url,
      data: dataPassed,
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('Error occurred on signup')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static forgotPassword (email, success, error) {
    var url = baseUrl + '/forgot'
    var dataPassed = JSON.stringify({
      email: email
    })

    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: url,
      data: dataPassed,
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('Error occurred on the password recovery process')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static userInfo (success, error) {
    var url = baseUrl + '/auth/token'
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: url,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.token)
      },
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('Error occurred on getting user info')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static forgotPasswordReset (token, password, success, error) {
    var url = baseUrl + '/forgot/' + token

    var dataPassed = JSON.stringify({
      password: password
    })

    $.ajax({
      type: 'PATCH',
      contentType: 'application/json',
      url: url,
      data: dataPassed,
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('Error occurred on resetting password')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static modifyAccountDetails (userId, field1, field2, success, error) {
    var url = baseUrl + '/users/' + userId
    var dataPassed = JSON.stringify({
      field1: field1,
      field2: field2
    })

    $.ajax({
      type: 'PATCH',
      contentType: 'application/json',
      url: url,
      data: dataPassed,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.token)
      },
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('Error occurred on modifying user info')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static modifyAccountPassword (userId, oldPassword, newPassword, success, error) {
    var url = baseUrl + '/users/' + userId
    var dataPassed = JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword
    })

    $.ajax({
      type: 'PATCH',
      contentType: 'application/json',
      url: url,
      data: dataPassed,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.token)
      },
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('An error has occurred on modifying user password')
        // $('#loader').hide()
        // error(response)
      }
    })
  }

  static deleteAccount (userId, success, failure) {
    var url = baseUrl + '/users/' + userId

    $.ajax({
      type: 'DELETE',
      contentType: 'application/json',
      url: url,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.token)
      },
      success: function (response) {
        success(response)
      },
      error: function (response) {
        if (response.status == 400) {
          // do something according to the status code
        }
        // console.log('An error has occurred on deleting user')
        // $('#loader').hide()
        // error(response)
      }
    })
  }
}
