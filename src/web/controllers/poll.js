const express = require('express');
const app = express();
const Poll = require('../../core/domain/poll');
const ListOfPolls = require('../../core/queries/list_of_polls');

module.exports = function PollController (store) {

  const listOfPolls = ListOfPolls(store);

  app.post('/poll', function (request, response) {
    const currentState = Poll.fromEvents(store.load());
    const events = Poll.dispatchCommand(currentState, { type: 'CreatePoll' });
    store.add(events);
    response.sendStatus(201);
  });

  app.get('/polls', function (request, response) {
    response.send(listOfPolls());
  });

  return app;
};
