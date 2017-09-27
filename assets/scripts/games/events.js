'use strict'

const gameApi = require('./api')
const gameUi = require('./ui')

const onGetGames = function (event) {
  event.preventDefault()
  // const weekID = $(this).data('id')
  // console.log(weekID)
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}

module.exports = {
  onGetGames
}
