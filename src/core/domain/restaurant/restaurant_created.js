module.exports = function restaurantCreated(state, event) {
  return Object.assign({}, state, {
    restaurants: state.restaurants.concat([{
      uuid: event.attributes.restaurantUuid,
      name: event.attributes.name
    }])
  });
};
