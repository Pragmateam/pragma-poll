const Store = require('../../src/store');
const Poll = require('../../src/poll');
const ListOfPolls = require('../../src/poll/list_of_polls');
const Clock = require('../support/fake-clock');
const UUID = require('../support/fake-uuid');

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
