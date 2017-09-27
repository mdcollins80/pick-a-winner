'use strict'

// const store = require('../store')
const showPicksTemplate = require('../templates/pick-listing.handlebars')

const onGetPicksSuccess = function (data) {
  const sorted = {
    picks: data.picks.sort(function (a, b) {
      return a.game_id - b.game_id
    })
  }
  // HANDLEBARS for dynamically loading the Picks
  const showPicksHtml = showPicksTemplate(sorted)
  $('.picks-table').remove()
  $('.user-picks-card').append(showPicksHtml)
}

const onGetPicksFailure = function () {
  $('#message').show().text('Problem loading picks.').fadeOut(5000)
}

const onCreatePickSuccess = function () {
  $('#message').show().text('Pick submitted.').fadeOut(5000)
}

const onCreatePickFailure = function () {
  $('#message').show().text('Problem with pick submission.').fadeOut(5000)
}

const onUpdatePickSuccess = function () {
  $('#message').show().text('Update success!').fadeOut(5000)
}

const onUpdatePickFailure = function () {
  $('#message').show().text('Update didn\'t to through!').fadeOut(5000)
}

module.exports = {
  onGetPicksSuccess,
  onGetPicksFailure,
  onCreatePickSuccess,
  onCreatePickFailure,
  onUpdatePickSuccess,
  onUpdatePickFailure
}

// {"picks":[
//   {
//     "id":1,
//     "winning_team":"New England Patriots",
//     "user":
//       {
//       "id":2,
//       "email":"a"
//       },
//     "game":
//       {
//       "id":1,
//       "week_num":1,
//       "kickoff":"0009-07-17T20:30:00.000Z",
//       "country":"United States",
//       "away_team":"Kansas City Chiefs",
//       "home_team":"New England Patriots",
//       "winning_team":""
//       }
//   },
//   {
//     "id":2,"winning_team":"Detroit Lions","user":{"id":2,"email":"a"},"game":{"id":2,"week_num":1,"kickoff":"0009-10-17T13:00:00.000Z","country":"United States","away_team":"Arizona Cardinals","home_team":"Detroit Lions","winning_team":""}},{"id":3,"winning_team":"Atlanta Falcons","user":{"id":2,"email":"a"},"game":{"id":3,"week_num":1,"kickoff":"0009-10-17T13:00:00.000Z","country":"United States","away_team":"Atlanta Falcons","home_team":"Chicago Bears","winning_team":""}}]}
