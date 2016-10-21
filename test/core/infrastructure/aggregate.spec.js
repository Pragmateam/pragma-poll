const sinon = require('sinon');
const createAggregate = require('../../../src/core/infrastructure/aggregate');

describe('Aggregate', function () {
  it('configures command handlers', function () {
    const expectedEvents = ['somethingDone'];
    const commandHandlerMock = sinon.stub().returns(expectedEvents);
    const Doer = createAggregate({ commandHandlers: { DoSomething: commandHandlerMock }});

    const generatedEvents = Doer.dispatchCommand(
      { some: 'state' },
      {
        type: 'DoSomething',
        parameters: { some: 'value' }
      }
    );

    expect(commandHandlerMock).to.have.been.calledWith({ some: 'state' }, { some: 'value' });
    expect(generatedEvents).to.deep.equal(expectedEvents);
  });

  it('fails when the given command type is not registered', function () {
    expect(function () {
      const handle = createAggregate({ commandHandlers: {} });
      handle.dispatchCommand({ does: 'not matter' }, { type: 'Unknown' });
    }).to.throw(/"Unknown" command is not registered/i);
  });

  it('does not alter the state when there are no events', function () {
    const Calculator = createAggregate({ initialState: 0 });

    expect(Calculator.fromEvents([])).to.equal(0);
  });

  it('does not alter the state when the event is unknown', function () {
    const Calculator = createAggregate({ initialState: 0 });

    expect(Calculator.fromEvents([{ type: 'DidSomenthingElse' }])).to.equal(0);
  });

  it('reduces state from given events', function () {
    const Calculator = createAggregate({
      initialState: 0,
      eventHandlers: {
        Added: (state, event) => state + event.attributes,
        Subtracted: (state, event) => state - event.attributes
      }
    });

    expect(Calculator.fromEvents([{ type: 'Added', attributes: 10 }])).to.equal(10);
    expect(Calculator.fromEvents([{ type: 'Added', attributes: 1 }, { type: 'Added', attributes: 1 }])).to.equal(2);
    expect(Calculator.fromEvents([{ type: 'Added', attributes: 1 }, { type: 'Added', attributes: 1 }, { type: 'Added', attributes: 1 }])).to.equal(3);
    expect(Calculator.fromEvents([{ type: 'Added', attributes: 1 }, { type: 'Subtracted', attributes: 2 }, { type: 'Added', attributes: 1 }])).to.equal(0);
  });
});
