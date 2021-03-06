const request = require('supertest');

const PollController = require('../../../src/web/controllers/poll');
const Store = require('../../../src/core/infrastructure/event_store');

const app = PollController(new Store());

describe('Create Poll', function () {
  it('creates a poll', function (done) {
    request(app)
      .post('/poll')
      .expect(201)
      .end(function () {
        request(app)
          .get('/polls')
          .expect(200)
          .end(function (error, response) {
            const lastPoll = response.body.slice(-1).pop();
            expect(lastPoll.uuid).to.match(/./)
            done(error);
          });
      });
  })
});
