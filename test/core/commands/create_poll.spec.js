const CreatePoll = require('proxyquire')('../../../src/core/commands/create_poll', {
  '../domain/uuid': require('../../support/fake-uuid'),
  '../domain/clock': require('../../support/fake-clock')
});

describe('CreatePoll', function () {
  it('emits a PollCreated event', function () {
    expect(CreatePoll({})).to.deep.equal([
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
    const currentState = { currentPollUuid: 'RANDOM_UUID' };

    expect(function() {
      CreatePoll(currentState);
    }).to.throw(/one poll at a time/);
  });
});
