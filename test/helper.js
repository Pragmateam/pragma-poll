const eventBus = require('./support/in-memory-event-bus');

global.expect = require('chai').expect;
global.proxyquire = require('proxyquire');

global.expectEmitEvents = function (block, events) {
  block();
  events.forEach(function (event) {
    expect(eventBus.last().event).to.equal(event.event);

    Object.keys(event.attributes).forEach(function (key) {
      expect(eventBus.last().attributes[key]).to.equal(event.attributes[key]);
    });
  });
}
