const CreatePoll = require('proxyquire')('../../src/commands/create_poll', {
  '../uuid': require('../support/fake-uuid'),
  '../clock': require('../support/fake-clock')
});

describe('CreatePoll', function () {
  it('emits a PollCreated event', function () {
    expect(CreatePoll({})).to.deep.equal([
      {
        name: 'PollCreated',
        attributes: {
          uuid: 'RANDOM_UUID',
          date: '2016-08-25T15:27Z'
        }
      }
    ]);
  });
});
