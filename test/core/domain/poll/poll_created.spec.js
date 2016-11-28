const pollCreated = require('../../../../src/core/domain/poll/poll_created');

describe('PollCreated', function () {

  it('adds new poll', function() {
    const state = { };
    const event = { attributes: { uuid: 1 } };
    const expectedPollUuid = 1;

    const finalState = pollCreated(state, event);

    expect(finalState.currentPollUuid).to.equal(expectedPollUuid);
  });

  it('does not change the given state', function() {
    const state = { };
    const event = { attributes: { uuid: 1 } };

    pollCreated(state, event);

    expect(state).to.deep.equal({ });
  });
});
