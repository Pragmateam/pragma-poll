const eventBus = require('./support/in-memory-event-bus');

const Poll = proxyquire('../src/poll', {
  './uuid': require('./support/fake-uuid'),
  './clock': require('./support/fake-clock'),
  './event-bus': eventBus
});

function expectEmitEvents(block, events) {
  block();

  events.forEach(function (event) {
    expect(eventBus.last().event).to.equal(event.event);

    Object.keys(event.attributes).forEach(function (key) {
      expect(eventBus.last().attributes[key]).to.equal(event.attributes[key]);
    });
  });
}


describe('Poll', function() {
  describe('creating', function () {
    it('emits a PollCreated event', function () {
      expectEmitEvents(Poll.create, [
        { event: 'PollCreated', attributes: { uuid: 'RANDOM_UUID', date: '2016-08-25T15:27Z' }}
      ]);
    });
  });

  describe('adding restaurant', function() {
    it('emits a RestaurantAddedToPoll event', function() {
      const poll = Poll.create();
      expectEmitEvents(function () { poll.addRestaurant('RESTAURANT_RANDOM_UUID'); }, [
        { event: 'RestaurantAddedToPoll', attributes: { restaurantUuid: 'RESTAURANT_RANDOM_UUID', pollUuid: poll.uuid } }
      ]);
    });
  });

  describe('closing', function () {
    it('emits a PollClosed event', function () {
      const poll = Poll.create();
      expectEmitEvents(poll.close, [
        { event: 'PollClosed', attributes: { date: '2016-08-25T15:27Z' } }
      ]);
    });
  });
});
