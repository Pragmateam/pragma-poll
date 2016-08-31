const assert = require('assert');
module.exports = function AddRestaurantToPoll (state, parameters) {
  assert(state.pollUuid, 'Poll must exist');

  return [
    {
      name: 'RestaurantAddedToPoll',
      attributes: {
        pollUuid: state.pollUuid,
        restaurantUuid: parameters.restaurantUuid
      }
    }
  ]
}
