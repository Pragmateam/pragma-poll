const request = require('supertest');

const PollController = require('../../src/controllers/poll');
const Store = require('../../src/store');

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
            const lastPoll = response.body.polls.slice(-1).pop();
            expect(lastPoll.uuid).to.match(/./)
            done(error);
          });
      });
  })
});
