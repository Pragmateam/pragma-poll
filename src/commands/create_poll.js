const UUID = require('../uuid');
const Clock = require('../clock');
const assert = require('assert');

module.exports = function CreatePoll (state) {
  assert(state.polls.length === 0, 'You can only have one poll at a time');

  return [{
    type: 'PollCreated',
    attributes: {
      uuid: UUID.generate(),
      date: Clock.now()
    }
  }];
};
