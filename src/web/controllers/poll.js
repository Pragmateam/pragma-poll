const express = require('express');
const app = express();
const ListOfPolls = require('../../core/queries/list_of_polls');
const CreatePoll = require('../../core/use_cases/create_poll');

module.exports = function PollController (store) {
  const createPoll = CreatePoll(store);
  const listOfPolls = ListOfPolls(store);

  app.post('/poll', function (request, response) {
    createPoll();
    response.sendStatus(201);
  });

  app.get('/polls', function (request, response) {
    response.send(listOfPolls());
  });

  return app;
};
