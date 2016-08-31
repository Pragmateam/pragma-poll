const UUID = require('../uuid');
const Clock = require('../clock');

module.exports = function CreatePoll () {
  return [{
    name: 'PollCreated',
    attributes: {
      uuid: UUID.generate(),
      date: Clock.now()
    }
  }];
};
