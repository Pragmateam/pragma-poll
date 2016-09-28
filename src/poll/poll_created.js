module.exports = function pollCreated(state, event) {
  return Object.assign({}, state, {
    polls: state.polls.concat([{
      uuid: event.attributes.pollUuid
    }])
  });
};
