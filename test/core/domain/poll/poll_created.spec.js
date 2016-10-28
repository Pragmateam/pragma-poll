const pollCreated = require('../../../../src/core/domain/poll/poll_created');

describe('PollCreated', function () {

  it('adds new poll', function() {
    const state = { polls: [] };
    const event = { attributes: { pollUuid: 1 } };
    const expectedPoll = { uuid: 1 };

    const finalState = pollCreated(state, event);

    expect(finalState.polls).to.contain(expectedPoll);
  });

  it('does not change the given state', function() {
    const state = { polls: [] };
    const event = { attributes: { pollUuid: 1 } };

    pollCreated(state, event);

    expect(state).to.deep.equal({ polls: [] });
  });
});
