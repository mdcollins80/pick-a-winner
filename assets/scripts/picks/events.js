'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const pickApi = require('./api')
const pickUi = require('./ui')

const onCreatePick = function (event) {
  event.preventDefault()
  if (event.target && event.target.matches('form.pick')) {
    const data = getFormFields(event.target)
    data.pick.user_id = store.user.id.toString()
    if (data.pick.winning_team.length > 0) {
      $(event.target).children('button').remove()

      pickApi.createPick(data)
        .then(pickUi.onCreatePickSuccess)
        .catch(pickUi.onCreatePickFailure)
    } else {
      $('#message').show().text('Fill in your predicted winning team!')// .fadeOut(5000)
    }
  }
}

const onGetPicks = function (event) {
  event.preventDefault()
  pickApi.getPicks()
    .then(pickUi.onGetPicksSuccess)
    .catch(pickUi.onGetPicksFailure)
}

const onUpdateOrDeletePick = function (event) {
  event.preventDefault()
  if (event.target && event.target.matches('form.user-update-pick')) {
    onUpdatePick(event)
  } else if (event.target && event.target.matches('form.user-delete-pick')) {
    onDeletePick(event)
  }
}

const onUpdatePick = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  pickApi.updatePick(data)
    .then(pickUi.onUpdatePickSuccess)
    .catch(pickUi.onUpdatePickFailure)
}

const onDeletePick = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  pickApi.deletePick(data)
    .then(pickUi.onDeletePickSuccess)
    .catch(pickUi.onDeletePickFailure)
}

module.exports = {
  onCreatePick,
  onGetPicks,
  onUpdateOrDeletePick,
  onUpdatePick,
  onDeletePick
}
