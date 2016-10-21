const Store = require('../../../src/core/infrastructure/event_store');
const Poll = require('../../../src/core/domain/poll');
const ListOfPolls = require('../../../src/core/queries/list_of_polls');
const Clock = require('../../support/fake-clock');
const UUID = require('../../support/fake-uuid');

describe('List of Polls', function () {
  it('adds a new poll to the list of polls', function() {
    const store = new Store();
    const listOfPolls = ListOfPolls(store);

    store.add(Poll.dispatchCommand(Poll.fromEvents([]), { type: 'CreatePoll' }));

    expect(listOfPolls()).to.deep.equal([
      { uuid: UUID.generate(), date: Clock.now() }
    ]);
  });
});
