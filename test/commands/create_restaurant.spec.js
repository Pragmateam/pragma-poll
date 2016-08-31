const CreateRestaurant = require('proxyquire')('../../src/commands/create_restaurant', {
  '../uuid': require('../support/fake-uuid'),
  '../clock': require('../support/fake-clock')
});

describe('CreateRestaurant', function () {
  it('emits a RestaurantCreated event', function () {
    expect(CreateRestaurant({}, { name: 'McDonalds' })).to.deep.equal([
      {
        name: 'RestaurantCreated',
        attributes: {
          name: 'McDonalds',
          uuid: 'RANDOM_UUID',
          date: '2016-08-25T15:27Z'
        }
      }
    ]);
  });
});
