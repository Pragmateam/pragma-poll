const createAggregate = require('../core/aggregate');

module.exports = createAggregate({
  initialState: {
    polls: []
  },
  commandHandlers: {
    CreatePoll: require('../commands/create_poll')
  },
  eventHandlers: {
    PollCreated: require('./poll_created')
  }
});
