const Clock = require('../domain/clock');
const assert = require('assert');

module.exports = function ClosePoll (state) {
  assert(state.pollUuid, 'Poll must exist');

  return [{
    name: 'PollClosed',
    attributes: {
      date: Clock.now()
    }
  }];
};
