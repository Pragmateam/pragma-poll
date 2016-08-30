const eventBus = require('./support/in-memory-event-bus');
const Restaurant = proxyquire('../src/restaurant', {
  './event-bus': eventBus,
  './uuid': require('./support/fake-uuid')
});


describe('Restaurant', function () {

  afterEach(eventBus.reset);

  describe('creating', function () {
    it('emits a RestaurantCreated event', function () {
      expectEmitEvents(Restaurant.create, [
        { event: 'RestaurantCreated', attributes: { uuid: 'RANDOM_UUID' } }
      ])
    })
  })
});
