Basic Premises

f(state, event) -> state
f(state, command) -> [event]


pollEvents = stores.eventsFor('Poll')

pollState = pollEvents.reduce(function (state, event) {

}, {});

CreatePoll(pollState, {})

newEvents = PollAggregate.dispatchCommand(state, command)

save( pollEvent.concat(newEvents))

events = PollAggregate
  .fromEvents(events)
  .dispatchCommand(command)
