'use strict'

const config = require('../config')
const store = require('../store')

const getPicks = function () {
  return $.ajax({
    url: config.apiOrigin + '/picks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPick = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/picks/' + data.picks.id,
    method: 'GET',
    data
  })
}

const createPick = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/picks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePick = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/picks/' + data.pick.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getPicks,
  getPick,
  createPick,
  updatePick
}
