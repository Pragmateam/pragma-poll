const CastVote = require('proxyquire')('../../src/commands/cast_vote', {
  '../clock': require('../support/fake-clock')
});

describe('CastVote', function () {
  it('ensures the poll exists', function () {
    expect(function () {
      CastVote({}, { restaurantUuid: 'RESTAURANT_UUID', userUuid: 'USER_UUID' });
    }).to.throw(/poll must exist/i);
  });

  it('ensures user can only cast one vote', function() {
    expect(function() {
      CastVote(
        {pollUuid: 'POLL_UUID', votes: [{restaurantUuid: 'DOES_NOT_MATTER', userUuid: 'USER_UUID'}]},
        {restaurantUuid: 'DOES_NOT_MATTER', userUuid: 'USER_UUID' });
    }).to.throw(/only once/);
  });

  it('emits a VoteCasted event', function () {
    const events = CastVote({ pollUuid: 'POLL_UUID' }, { restaurantUuid: 'RESTAURANT_UUID', userUuid: 'USER_UUID' });
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
