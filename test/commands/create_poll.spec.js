const CreatePoll = require('proxyquire')('../../src/commands/create_poll', {
  '../uuid': require('../support/fake-uuid'),
  '../clock': require('../support/fake-clock')
});

describe('CreatePoll', function () {
  it('emits a PollCreated event', function () {
    expect(CreatePoll({
      polls: []
    })).to.deep.equal([
      {
        type: 'PollCreated',
        attributes: {
          uuid: 'RANDOM_UUID',
          date: '2016-08-25T15:27Z'
        }
      }
    ]);
  });

  it('ensures only one poll at time', function() {
    const currentState = {
      polls: [
        {
          uuid: 'RANDOM_UUID'
        }
      ]
    };

    expect(function() {
      CreatePoll(currentState);
    }).to.throw(/one poll at a time/);
  });
});
