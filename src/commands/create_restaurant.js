const UUID = require('../uuid');
const Clock = require('../clock');

module.exports = function CreateRestaurant (state, attributes) {
  return [
    {
      name: 'RestaurantCreated',
      attributes: {
        name: attributes.name,
        uuid: UUID.generate(),
        date: Clock.now()
      }
    }
  ]
};
