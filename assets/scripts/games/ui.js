'use strict'

// const store = require('../store')
const showGamesTemplate = require('../templates/game-listing.handlebars')

const onGetGamesSuccess = function (data) {
  const sorted = {
    games: data.games.sort(function (a, b) {
      return a.id - b.id
    })
  }
  // HANDLEBARS for dynamically loading the Games
  const showGamesHtml = showGamesTemplate(sorted)
  $('.games-table').remove()
  $('.picks-card').append(showGamesHtml)
  $('#message').show().text('Successfully loaded games.')// .fadeOut(5000)
}

const onGetGamesFailure = function () {
  $('#message').show().text('Problem loading games.')// .fadeOut(5000)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure
}
