const Restaurant = require('../domain/restaurant');

function newRestaurantUuid (events) {
  const restaurantCreatedEvent = events.find((event) => event.type === 'RestaurantCreated');
  return restaurantCreatedEvent.attributes.uuid;
}

module.exports = function CreateRestaurant (store) {
  return function () {
    const currentState = Restaurant.fromEvents(store.load());
    const events = Restaurant.dispatchCommand(currentState, { type: 'CreateRestaurant' , parameters: { name: 'Hero Sushi' }});
    store.add(events);

    return newRestaurantUuid(events);
  };
}
