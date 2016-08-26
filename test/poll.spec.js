const eventBus = require('./support/in-memory-event-bus');

const Poll = proxyquire('../src/poll', {
  './uuid': require('./support/fake-uuid'),
  './clock': require('./support/fake-clock'),
  './event-bus': eventBus
});

describe('Poll', function() {
  describe('creating', function () {

    it('emits a PollCreated event', function () {
      Poll.create();
      expect(eventBus.last().event).to.equal('PollCreated');
      expect(eventBus.last().attributes.uuid).to.equal('RANDOM_UUID');
      expect(eventBus.last().attributes.date).to.equal('2016-08-25T15:27Z');
    });
  });
});
