const sinon = require('sinon');
const Store = require('../../src/store');

describe('Store', function () {
  let store;

  beforeEach(() => { store = new Store(); });

  it('persists events', function () {
    const eventA = { type: 'EventACreated' }
    const eventB = { type: 'EventBCreated' }
    const eventC = { type: 'EventCCreated' }

    store.add([eventA]);
    store.add([eventB, eventC]);

    expect(store.load()).to.deep.equal([eventA, eventB, eventC]);
  });

  it('notifies listeners when new events are added', function () {
    const listener = sinon.mock();
    store.subscribe(listener);
    store.add([{ type: 'EventACreated' }]);
    expect(listener).to.have.been.calledWith([{ type: 'EventACreated' }]);
  });

  it('retrieves events sent before subscribe', function () {
    const listener = sinon.mock();

    store.add([{ type: 'EventACreated' }]);
    store.add([{ type: 'EventACreated2' }]);

    store.subscribe(listener);

    expect(listener).to.have.been.calledWith([{ type: 'EventACreated' },{ type: 'EventACreated2' }]);
  })

});
