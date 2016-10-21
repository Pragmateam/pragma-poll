function createAggregate({ initialState, eventHandlers = {}, commandHandlers }) {
  function identity (input) {
    return input;
  }

  function handlerForEvent (type) {
    return eventHandlers[type] || identity;
  }

  function dispatchCommand (state, command) {
    const commandHandler = commandHandlers[command.type];
    if (!commandHandler) { throw new Error(`"${command.type}" command is not registered.`) }
    return commandHandlers[command.type](state, command.parameters);
  }

  function fromEvents (events) {
    return events.reduce((state, event) => {
      return handlerForEvent(event.type)(state, event);
    }, initialState);
  }

  return {
    dispatchCommand,
    fromEvents
  };
};

module.exports = createAggregate;
