module.exports = function ListOfPolls (store) {
  const polls = [];

  store.subscribe(function (events) {
    events.forEach(function (event) {
      const { date, uuid } = event.attributes;
      polls.push({ date, uuid });
    });
  });

  return function () {
    return polls;
  };
};
