const Poll = require('../../core/domain/poll');

module.exports = function CreatePoll(store) {
  return function () {
    const currentState = Poll.fromEvents(store.load());
    const events = Poll.dispatchCommand(currentState, { type: 'CreatePoll' });
    store.add(events);
  };
};
