const expect = require('chai').expect;
const proxyquire = require('proxyquire');

UUIDDouble = {
  generate: function () {
    return 'RANDOM_UUID';
  }
};

EventBusDouble = {}

const Poll = proxyquire('../src/poll', {
  './uuid': UUIDDouble,
  './event-bus': EventBusDouble
});

describe('Poll', function() {
  describe('creating', function () {

    it('emits a PollCreated event', function () {
      Poll.create();
      expect(EventBusDouble.last.name).to.equal('PollCreated');
      expect(EventBusDouble.last.attributes.uuid).to.equal('RANDOM_UUID')
    });
  });
});
