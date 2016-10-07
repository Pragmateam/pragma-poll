const express = require('express');
const app = module.exports = express();
const Poll = require('../poll');

let pollEvents = [];

app.post('/poll', function (request, response) {
  const currentState = Poll.fromEvents(pollEvents);
  const events = Poll.dispatchCommand(currentState, { type: 'CreatePoll' });
  pollEvents = pollEvents.concat(events);
  response.sendStatus(201);
});

app.get('/polls', function (request, response) {
  const finalState = Poll.fromEvents(pollEvents);
  response.send(finalState)
});
