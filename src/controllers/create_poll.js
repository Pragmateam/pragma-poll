const express = require('express');
const app = module.exports = express();

let pollEvents = [];

app.post('/poll', function (request, response) {
  const CreatePoll = require('../commands/create_poll');
  pollEvents = pollEvents.concat(CreatePoll());
  response.sendStatus(201);
});

app.get('/polls', function (request, response) {
  const finalState = pollEvents.reduce(function (state, event) {
    if (event.name === 'PollCreated') {
      state.polls = state.polls || [];
      state.polls.push({
        uuid: event.attributes.pollUuid
      });
      return state;
    }
  }, {});

  response.send(finalState)
});
