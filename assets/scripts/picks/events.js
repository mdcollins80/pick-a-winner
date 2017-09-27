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

    pickApi.createPick(data)
      .then(pickUi.onCreatePickSuccess)
      .catch(pickUi.onCreatePickFailure)
  }
}

const onGetPicks = function (event) {
  event.preventDefault()
  pickApi.getPicks()
    .then(pickUi.onGetPicksSuccess)
    .catch(pickUi.onGetPicksFailure)
}

module.exports = {
  onCreatePick,
  onGetPicks
}
