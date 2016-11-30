const Poll = require('../../core/domain/poll');

function newPollUuid (events) {
  const pollCreatedEvent = events.find((event) => event.type === 'PollCreated');
  return pollCreatedEvent.attributes.uuid;
}

module.exports = function CreatePoll(store) {
  return function () {
    const currentState = Poll.fromEvents(store.load());
    const events = Poll.dispatchCommand(currentState, { type: 'CreatePoll' });
    store.add(events);

    return newPollUuid(events);
  };
};
