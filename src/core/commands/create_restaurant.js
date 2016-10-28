const UUID = require('../domain/uuid');
const Clock = require('../domain/clock');

module.exports = function CreateRestaurant (state, attributes) {
  return [
    {
      type: 'RestaurantCreated',
      attributes: {
        name: attributes.name,
        uuid: UUID.generate(),
        date: Clock.now()
      }
    }
  ]
};
