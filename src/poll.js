const UUID = require('./uuid');
const Clock = require('./clock');
const EventBus = require('./event-bus');

module.exports.create = function create () {
  EventBus.emit('PollCreated', {
    uuid: UUID.generate(),
    date: Clock.now()
  });
};
