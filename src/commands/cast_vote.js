const assert = require('assert');
const DefaultClock = require('../clock');

const neverVoted = (votes = [], targetUuid) => {
  return votes.every(vote => vote.userUuid !== targetUuid);
};

module.exports = function CastVote (state, parameters, Clock = DefaultClock) {
  assert(state.pollUuid, 'Poll must exist');
  assert(neverVoted(state.votes, parameters.userUuid), 'User can vote only once');

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
