'use strict'

// const store = require('../store')
const showGamesTemplate = require('../templates/game-listing.handlebars')

const onGetGamesSuccess = function (data) {
  const sorted = {
    games: data.games.sort(function (a, b) {
      return a.id - b.id
    })
  }
  console.log(sorted)
  const showGamesHtml = showGamesTemplate(sorted)
  $('.picks-card').append(showGamesHtml)
}

const onGetGamesFailure = function () {
  $('#message').show().text('Problem loading games.').fadeOut(5000)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure
}
