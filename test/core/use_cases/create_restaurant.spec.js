const Store = require('../../../src/core/infrastructure/event_store');
const CreateRestaurant = require('../../../src/core/use_cases/create_restaurant');

describe('Create Restaurant use case', function () {

  it('persists in store', function (done) {
    const store = new Store();
    const createRestaurant = CreateRestaurant(store);

    store.subscribe(function (events) {
      expect(events).to.deep.equal([{
        type: 'RestaurantCreated',
        attributes: {
          date: '2016-08-25T15:27Z',
          uuid: 'RANDOM_UUID',
          name: 'Hero Sushi'
        }
      }]);
      done();
    });

    createRestaurant();
  });

  it('returns the newly created restaurant uuid', function () {
    const store = new Store();
    const createRestaurant = CreateRestaurant(store);
    expect(createRestaurant()).to.equal('RANDOM_UUID');
  });

});
