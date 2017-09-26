'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('./api')
const gameUi = require('./ui')

const onGetGames = function (event) {
  event.preventDefault()
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   userApi.signIn(data)
//     .then(userUi.onSignInSuccess)
//     .catch(userUi.onSignInFailure)
// }
//
// // const onSignIn = function (event) {
// //   event.preventDefault()
// //   const data = getFormFields(this)
// //   userApi.signIn(data)
// //     .then(userUi.onSignInSuccess)
// //     .catch(userUi.onSignInFailure)
// // }
// //
// const onChangePassword = function (event) {
//   event.preventDefault()
//   console.log(event)
//   const data = getFormFields(this)
//   console.log(data)
//   const passwords = data.passwords
//
//   if (passwords.new === passwords.confirm) {
//     userApi.changePassword(data)
//       .then(userUi.onChangePasswordSuccess)
//       .catch(userUi.onChangePasswordFailure)
//   } else {
//     $('#message').show().text('Passwords don\'t match!').fadeOut(5000)
//   }
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   userApi.signOut()
//     .then(userUi.onSignOutSuccess)
//     .catch(userUi.onSignOutFailure)
// }
//
module.exports = {
  onGetGames // ,
  // onSignIn,
  // onChangePassword,
  // onSignOut
}
