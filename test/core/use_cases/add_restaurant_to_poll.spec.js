const Store = require('../../../src/core/infrastructure/event_store');
const CreatePoll = require('../../../src/core/use_cases/create_poll');
const CreateRestaurant = require('../../../src/core/use_cases/create_restaurant');
const AddRestaurantToPoll = require('../../../src/core/use_cases/add_restaurant_to_poll');

describe('Add Restaurant To Poll use case', function () {

  it('persists in store', function (done) {
    const store = new Store();
    const createPoll = CreatePoll(store);
    const createRestaurant = CreateRestaurant(store);
    const addRestaurantToPoll = AddRestaurantToPoll(store);

    const pollUuid = createPoll();
    const restaurantUuid = createRestaurant({ pollUuid });

    addRestaurantToPoll({ pollUuid, restaurantUuid });

    store.subscribe(function (events) {

      expect(events[events.length-1]).to.deep.equal({
        name: 'RestaurantAddedToPoll',
        attributes: {
          restaurantUuid: 'RANDOM_UUID',
          pollUuid: 'RANDOM_UUID'
        }
      });
      done();
    });

  });

});
