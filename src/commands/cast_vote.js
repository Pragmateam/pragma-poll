const assert = require('assert');
const Clock = require('../clock');

module.exports = function CastVote (state, parameters) {
  assert(state.pollUuid, 'Poll must exist')

  return [
    {
      name: 'VoteCasted',
      attributes: {
        pollUuid: state.pollUuid,
        restaurantUuid: parameters.restaurantUuid,
        userUuid: parameters.userUuid,
        date: Clock.now()
      }
    }
  ]
}
