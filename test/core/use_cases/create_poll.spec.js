const Store = require('../../../src/core/infrastructure/event_store');
const CreatePoll = require('../../../src/core/use_cases/create_poll');

describe('Create Poll use case', function () {

  it('persists in store', function (done) {
    const store = new Store();
    const createPoll = CreatePoll(store);

    store.subscribe(function (events) {
      expect(events).to.deep.equal([{
        type: 'PollCreated',
        attributes: {
          uuid: 'RANDOM_UUID',
          date: '2016-08-25T15:27Z'
        }
      }]);
      done();
    });

    createPoll();
  });

  it('returns the newly created poll uuid', function () {
    const store = new Store();
    const createPoll = CreatePoll(store);
    expect(createPoll()).to.equal('RANDOM_UUID');
  });
});
