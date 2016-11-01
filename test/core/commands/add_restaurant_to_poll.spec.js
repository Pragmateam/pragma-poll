const AddRestaurantToPoll = require('../../../src/core/commands/add_restaurant_to_poll');

describe('AddRestaurantToPoll', function () {
  it('ensures the poll exists', function () {
    expect(function () {
      AddRestaurantToPoll({}, { restaurantUuid: 'DOES_NOT_MATTER' });
    }).to.throw(/poll must exist/i);
  });

  it('emits a RestaurantAddedToPoll event', function () {
    const events = AddRestaurantToPoll({ currentPollUuid: 'POLL_UUID' }, { pollUuid: 'POLL_UUID', restaurantUuid: 'RESTAURANT_UUID' });
    expect(events).to.deep.equal([
      {
        name: 'RestaurantAddedToPoll',
        attributes: {
          restaurantUuid: 'RESTAURANT_UUID',
          pollUuid: 'POLL_UUID'
        }
      }
    ]);
  });
});
