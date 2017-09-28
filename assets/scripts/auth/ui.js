'use strict'

const store = require('../store')
// const gameApi = require('../games/api')
// const gameUi = require('../games/ui')

const onSignUpSuccess = function (data) {
  store.user = data.user
  $('#message').show().text('You\'ve successfully signed up. Now sign in!')// .fadeOut(5000)
  $('#sign-up-box').addClass('hidden')
  $('.sign-up-input').val('')
}

const onSignUpFailure = function () {
  $('#message').show().text('There was a problem with your sign up.')// .fadeOut(5000)
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#message').show().text('Successful Sign-In!')// .fadeOut(5000)
  $('nav').removeClass('hidden')
  $('#landing').addClass('hidden')
  $('#accordion').removeClass('hidden')
  $('.sign-in-input').val('')
  $('.navbar-teamname').text('Pick a Winner - Team: ' + store.user.team_name.toString())
}

const onSignInFailure = function () {
  $('#message').show().text('There was a problem with your sign in.  Try again?')// .fadeOut(5000)
}

const onChangePasswordSuccess = function () {
  $('#message').show().text('Successfully updated your password')// .fadeOut(5000)
  $('#pwModal').modal('hide')
}

const onChangePasswordFailure = function () {
  $('#message').show().text('There was a problem with your password change.')// .fadeOut(5000)
}

const onSignOutSuccess = function () {
  $('#message').show().text('You have signed out.')// .fadeOut(5000)
  $('nav').addClass('hidden')
  $('#landing').removeClass('hidden')
  $('#sign-up-box').removeClass('hidden')
  $('#accordion').addClass('hidden')
  $('#navbarResponsive').collapse('hide')
  $('div[role="tabpanel"]').collapse('hide')
  $('.picks-table').remove()
  $('.games-table').remove()
}

const onSignOutFailure = function () {
  $('#message').show().text('Failed to sign out bro!')// .fadeOut(5000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
