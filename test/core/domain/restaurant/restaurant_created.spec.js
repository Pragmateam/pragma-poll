const restaurantCreated = require('../../../../src/core/domain/restaurant/restaurant_created');

describe('RestaurantCreated', function () {

  it('adds new restaurant', function() {
    const state = { restaurants: [] };
    const event = { attributes: { restaurantUuid: 1, name: 'Hero Sushi' } };
    const expectedRestaurant = { uuid: 1, name: 'Hero Sushi' };

    const finalState = restaurantCreated(state, event);

    expect(finalState.restaurants).to.contain(expectedRestaurant);
  });

  it('does not change the given state', function() {
    const state = { restaurants: [] };
    const event = { attributes: { restaurantUuid: 1, name: 'Sushi Hero' } };

    restaurantCreated(state, event);

    expect(state).to.deep.equal({ restaurants: [] });
  });
});
