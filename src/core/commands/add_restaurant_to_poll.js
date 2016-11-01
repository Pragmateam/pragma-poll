const assert = require('assert');
module.exports = function AddRestaurantToPoll (state, parameters) {
  assert(state.currentPollUuid, 'Poll must exist');

  return [
    {
      name: 'RestaurantAddedToPoll',
      attributes: {
        pollUuid: parameters.pollUuid,
        restaurantUuid: parameters.restaurantUuid
      }
    }
  ]
}
