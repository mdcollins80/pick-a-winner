'use strict'

// const store = require('../store')
// const showGamesTemplate = require('../templates/game-listing.handlbars')

const onGetGamesSuccess = function (data) {
  const sorted = data.games.sort(function (a, b) {
    return a.id - b.id
  })
  // const showGamesHtml = showGamesTemplate(data)
  // $('.picks-card').append(showGamesHtml)
  $('.picks-card').append('<ul class="games-list"></ul>')
  sorted.forEach(function (game) {
    const element = $('<li data-id="' + game.id + '"class="game-list-item">Week: ' + game.week_num + '  |  Kickoff: ' + game.time + '  |  Away ID: ' + game.away_team_id + '  |  Home ID: ' + game.home_team_id + '<button data-id="' + game.away_team_id + '" class="away-button">Away</button>  <button data-id="' + game.home_team_id + '" class="home-button">Home</button> </li>')
    $('.games-list').append(element)
  })
}

const onGetGamesFailure = function () {
  $('#message').show().text('Problem loading games.').fadeOut(5000)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure
}
