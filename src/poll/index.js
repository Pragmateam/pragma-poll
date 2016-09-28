const createAggregate = require('../core/aggregate');

module.exports = createAggregate({
  initialState: {
    polls: []
  },
  commandHandlers: {
    CreatePoll: require('../commands/create_poll')
  },
  eventHandlers: {
    PollCreated: function (state, event) {
      state.polls.push({
        uuid: event.attributes.pollUuid
      });
      return state;
    }
  }
});
