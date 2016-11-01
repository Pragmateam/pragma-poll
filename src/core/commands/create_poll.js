const UUID = require('../domain/uuid');
const Clock = require('../domain/clock');
const assert = require('assert');

module.exports = function CreatePoll (state) {
  assert(!state.currentPollUuid, 'You can only have one poll at a time');

  return [{
    type: 'PollCreated',
    attributes: {
      uuid: UUID.generate(),
      date: Clock.now()
    }
  }];
};
