'use strict'

const store = require('../store')

const onSignUpSuccess = function (data) {
  store.user = data.user
  $('#message').show().text('You\'ve successfully signed up. Now sign in!').fadeOut(5000)
  $('#sign-up-box').addClass('hidden')
  $('.sign-up-input').val('')
}

const onSignUpFailure = function () {
  $('#message').show().text('There was a problem with your sign up.').fadeOut(5000)
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#message').show().text('Successful Sign-In!').fadeOut(5000)
  console.log(data)
  $('#landing').addClass('hidden')
  $('#accordion').removeClass('hidden')
  $('.sign-in-input').val('')
}
//
//   // show all games played statistics
//   gameApi.getGames()
//     .then(gameUi.onGetGamesSuccess)
//     .catch(gameUi.onGetGamesFailure)
//   // show all finished games statistics
//   gameApi.getFinishedGames()
//     .then(gameUi.onGetFinishedGamesSuccess)
//     .catch(gameUi.onGetFinishedGamesFailure)
// }
//
const onSignInFailure = function () {
  $('#message').show().text('There was a problem with your sign in.  Try again?').fadeOut(5000)
}
//
// const onChangePasswordSuccess = function () {
//   $('#user-change-pw').addClass('hidden')
//   $('#message').show().text('Changed your password bro!').fadeOut(5000)
//   $('.change-pw-input').val('')
// }
//
// const onChangePasswordFailure = function () {
//   $('#message').show().text('Problems changing your password bro!').fadeOut(5000)
// }
//
// const onSignOutSuccess = function () {
//   boardReset.boardReset()
//   store.board = 'off'
//   $('#message').show().text('Signed out bro!').fadeOut(5000)
//   $('main').addClass('hidden')
//   $('header').addClass('hidden')
//   $('nav').addClass('hidden')
//   $('#landing').removeClass('hidden')
//   $('#sign-up-box').removeClass('hidden')
//   $('#user-change-pw').addClass('hidden')
// }
//
// const onSignOutFailure = function () {
//   $('#message').show().text('Failed to sign out bro!').fadeOut(5000)
// }
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure // ,
  // onChangePasswordSuccess,
  // onChangePasswordFailure,
  // onSignOutSuccess,
  // onSignOutFailure
}
