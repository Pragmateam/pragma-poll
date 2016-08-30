const EventBus = require('./event-bus');
const UUID = require('./uuid');

module.exports.create = function create () {
  EventBus.emit('RestaurantCreated', {
    uuid: UUID.generate()
  });
};
