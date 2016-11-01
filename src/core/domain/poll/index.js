const createAggregate = require('../../infrastructure/aggregate');

module.exports = createAggregate({
  initialState: { },
  commandHandlers: {
    CreatePoll: require('../../commands/create_poll')
  },
  eventHandlers: {
    PollCreated: require('./poll_created')
  }
});
