const UUID = require('./uuid');
const Clock = require('./clock');
const EventBus = require('./event-bus');

module.exports.create = function create () {
  const uuid = UUID.generate();

  EventBus.emit('PollCreated', {
    uuid,
    date: Clock.now()
  });

  return {
    uuid,

    addRestaurant: function(restaurantUuid) {
      EventBus.emit('RestaurantAddedToPoll', {
        restaurantUuid,
        pollUuid: uuid
      });
    },

    close: function () {
      EventBus.emit('PollClosed', {
        date: Clock.now()
      })
    }
  };
};
