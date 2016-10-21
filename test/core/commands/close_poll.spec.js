const ClosePoll = require('proxyquire')('../../../src/core/commands/close_poll', {
  '../domain/clock': require('../../support/fake-clock')
});

describe('ClosePoll', function () {
  it('ensures the poll exists', function () {
    expect(function () {
      ClosePoll({});
    }).to.throw(/poll must exist/i);
  });

  it('emits a PollClosed event', function () {
    expect(ClosePoll({ pollUuid: 'POLL_UUID' })).to.deep.equal([
      {
        name: 'PollClosed',
        attributes: {
          date: '2016-08-25T15:27Z'
        }
      }
    ]);
  })
});
