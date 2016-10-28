const CreateRestaurant = require('proxyquire')('../../../src/core/commands/create_restaurant', {
  '../domain/uuid': require('../../support/fake-uuid'),
  '../domain/clock': require('../../support/fake-clock')
});

describe('CreateRestaurant', function () {
  it('emits a RestaurantCreated event', function () {
    expect(CreateRestaurant({}, { name: 'McDonalds' })).to.deep.equal([
      {
        type: 'RestaurantCreated',
        attributes: {
          name: 'McDonalds',
          uuid: 'RANDOM_UUID',
          date: '2016-08-25T15:27Z'
        }
      }
    ]);
  });
});
