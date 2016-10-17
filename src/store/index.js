module.exports = function Store (storedEvents = [], listeners = []) {
  function add(events) {
    storedEvents = storedEvents.concat(events);

    listeners.forEach(function (listener) {
      listener(events);
    })
  }

  function subscribe(listener) {
    if (storedEvents.length)
      listener(storedEvents);

    listeners.push(listener);
  }

  function load () {
    return storedEvents;
  }

  return { add, load, subscribe };
}
