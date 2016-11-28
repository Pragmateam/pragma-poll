module.exports = function pollCreated(state, event) {
  return Object.assign({}, state, {
    currentPollUuid: event.attributes.uuid
  });
};
