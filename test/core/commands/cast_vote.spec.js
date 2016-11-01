const FakeClock = require('../../support/fake-clock');
const CastVote = require('../../../src/core/commands/cast_vote');

describe('CastVote', function () {
  it('ensures the poll exists', function () {
    expect(function () {
      CastVote({}, { restaurantUuid: 'RESTAURANT_UUID', userUuid: 'USER_UUID' }, FakeClock);
    }).to.throw(/poll must exist/i);
  });

  it('ensures user can only cast one vote', function() {
    expect(function() {
      CastVote(
        {currentPollUuid: 'POLL_UUID', votes: [{restaurantUuid: 'DOES_NOT_MATTER', userUuid: 'USER_UUID'}]},
        {restaurantUuid: 'DOES_NOT_MATTER', userUuid: 'USER_UUID' },
        FakeClock);
    }).to.throw(/only once/);
  });

  it('emits a VoteCasted event', function () {
    const events = CastVote({ currentPollUuid: 'POLL_UUID' }, { pollUuid: 'POLL_UUID', restaurantUuid: 'RESTAURANT_UUID', userUuid: 'USER_UUID' }, FakeClock);
    expect(events).to.deep.equal([
      {
        name: 'VoteCasted',
        attributes: {
          restaurantUuid: 'RESTAURANT_UUID',
          pollUuid: 'POLL_UUID',
          userUuid: 'USER_UUID',
          date: '2016-08-25T15:27Z'
        }
      }
    ]);
  })

});
