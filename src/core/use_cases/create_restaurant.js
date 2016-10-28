const Restaurant = require('../domain/restaurant');

module.exports = function CreateRestaurant (store) {
  return function () {
    const currentState = Restaurant.fromEvents(store.load());
    const events = Restaurant.dispatchCommand(currentState, { type: 'CreateRestaurant' , parameters: { name: 'Hero Sushi' }});
    store.add(events);
  };
}
