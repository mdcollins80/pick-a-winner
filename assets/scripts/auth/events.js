'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const userApi = require('./api')
const userUi = require('./ui')
// const gameApi = require('../games/api')
// const gameUi = require('../games/ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const user = data.credentials

  if (user.email.length !== 0) {
    if (user.team_name.length !== 0) {
      if (user.password === user.password_confirmation) {
        userApi.signUp(data)
          .then(userUi.onSignUpSuccess)
          .catch(userUi.onSignUpFailure)
      } else {
        $('#message').show().text('Passwords don\'t match').fadeOut(5000)
      }
    } else {
      $('#message').show().text('Please enter a team_name').fadeOut(5000)
    }
  } else {
    $('#message').show().text('Please enter an email').fadeOut(5000)
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log(this)
  console.log(event)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInFailure)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   userApi.signIn(data)
//     .then(userUi.onSignInSuccess)
//     .catch(userUi.onSignInFailure)
// }
//
const onChangePassword = function (event) {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(this)
  console.log(data)
  const passwords = data.passwords

  if (passwords.new === passwords.confirm) {
    userApi.changePassword(data)
      .then(userUi.onChangePasswordSuccess)
      .catch(userUi.onChangePasswordFailure)
  } else {
    $('#message').show().text('Passwords don\'t match!').fadeOut(5000)
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.onSignOutSuccess)
    .catch(userUi.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
