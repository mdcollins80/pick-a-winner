'use strict'

const config = require('../config')

const getGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET'
  })
}

const getGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.games.id,
    method: 'GET',
    data
  })
}

module.exports = {
  getGames,
  getGame
}
