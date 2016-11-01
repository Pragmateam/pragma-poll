const assert = require('assert');
const DefaultClock = require('../domain/clock');

const neverVoted = (votes = [], targetUuid) => {
  return votes.every(vote => vote.userUuid !== targetUuid);
};

const restaurantIsPartOfThePoll = (restaurants, uuid) => {
  return restaurants.includes(uuid);
}

module.exports = function CastVote (state, parameters, Clock = DefaultClock) {
  assert(state.currentPollUuid, 'Poll must exist');
  assert(restaurantIsPartOfThePoll(state.restaurants, parameters.restaurantUuid), 'The given restaurant is not part of this poll');
  assert(neverVoted(state.votes, parameters.userUuid), 'User can vote only once');

  return [
    {
      name: 'VoteCasted',
      attributes: {
        pollUuid: parameters.pollUuid,
        restaurantUuid: parameters.restaurantUuid,
        userUuid: parameters.userUuid,
        date: Clock.now()
      }
    }
  ]
}
