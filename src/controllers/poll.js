const express = require('express');
const app = module.exports = express();
const createAggregate = require('../core/aggregate');

let pollEvents = [];

const Poll = createAggregate({
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

app.post('/poll', function (request, response) {
  const events = Poll.dispatchCommand({}, { type: 'CreatePoll' });
  pollEvents = pollEvents.concat(events);
  response.sendStatus(201);
});

app.get('/polls', function (request, response) {
  const finalState = Poll.fromEvents(pollEvents);
  response.send(finalState)
});
