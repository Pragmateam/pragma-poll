const Poll = require('../../core/domain/poll');

module.exports = function AddRestaurantToPoll(store) {
  return function (parameters) {
    const currentState = Poll.fromEvents(store.load());
    const events = Poll.dispatchCommand(currentState, { type: 'AddRestaurantToPoll', parameters });
    store.add(events);
  };
};
