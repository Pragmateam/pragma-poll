const UUID = require('./uuid');
const EventBus = require('./event-bus');

module.exports.create = function create () {
  EventBus.last = { name: 'PollCreated', attributes: { uuid: UUID.generate() } };
};
