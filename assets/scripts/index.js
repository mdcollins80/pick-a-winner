'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
const pickEvents = require('./picks/events')

$(() => {
  setAPIOrigin(location, config)
  $('#user-sign-up').on('submit', authEvents.onSignUp)
  $('#user-sign-in').on('submit', authEvents.onSignIn)
  $('.user-change-password').on('submit', authEvents.onChangePassword)
  $('#user-sign-out').on('click', authEvents.onSignOut)
  $('.get-games').on('click', gameEvents.onGetGames)
  $('.picks-card').on('submit', pickEvents.onCreatePick)
  $('.get-picks').on('click', pickEvents.onGetPicks)
  $('.user-picks-card').on('submit', pickEvents.onUpdateOrDeletePick)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
