'use strict'

// const store = require('../store')
const showPicksTemplate = require('../templates/pick-listing.handlebars')
const pickApi = require('./api')

const onGetPicksSuccess = function (data) {
  const sorted = {
    picks: data.picks.sort(function (a, b) {
      return a.game.id - b.game.id
    })
  }
  // HANDLEBARS for dynamically loading the Picks
  const showPicksHtml = showPicksTemplate(sorted)
  $('.picks-table').remove()
  $('.user-picks-card').append(showPicksHtml)
  $('#message').show().text('Successfully retrieved your picks!')// .fadeOut(5000)
}

const onGetPicksFailure = function () {
  $('#message').show().text('Problem loading picks.')// .fadeOut(5000)
}

const onCreatePickSuccess = function () {
  $('#message').show().text('Pick submitted.')// .fadeOut(5000)
  pickApi.getPicks()
    .then(onGetPicksSuccess)
    .catch(onGetPicksFailure)
}

const onCreatePickFailure = function () {
  $('#message').show().text('Problem with pick submission.')// .fadeOut(5000)
}

const onUpdatePickSuccess = function (data) {
  $('#message').show().text('Successfully updated pick.')// .fadeOut(5000)
  pickApi.getPicks()
    .then(onGetPicksSuccess)
    .catch(onGetPicksFailure)
}

const onUpdatePickFailure = function () {
  $('#message').show().text('Update didn\'t to through!')// .fadeOut(5000)
}

const onDeletePickSuccess = function () {
  $('#message').show().text('Delete success!')// .fadeOut(5000)
  pickApi.getPicks()
    .then(onGetPicksSuccess)
    .catch(onGetPicksFailure)
}

const onDeletePickFailure = function () {
  $('#message').show().text('Delete failed!')// .fadeOut(5000)
}

module.exports = {
  onGetPicksSuccess,
  onGetPicksFailure,
  onCreatePickSuccess,
  onCreatePickFailure,
  onUpdatePickSuccess,
  onUpdatePickFailure,
  onDeletePickSuccess,
  onDeletePickFailure
}
