const express = require('express');
const app = express();
const Poll = require('../poll');

module.exports = function PollController (store) {

  app.post('/poll', function (request, response) {
    const currentState = Poll.fromEvents(store.load());
    const events = Poll.dispatchCommand(currentState, { type: 'CreatePoll' });
    store.add(events);
    response.sendStatus(201);
  });

  app.get('/polls', function (request, response) {
    const finalState = Poll.fromEvents(store.load());
    response.send(finalState)
  });

  return app;
};
