let storedEvents = [];
let listeners = [];

function add(events) {
  storedEvents = storedEvents.concat(events);

  listeners.forEach(function(listener) {
    listener(events);
  })
}

function load() {
  return storedEvents;
}

function subscribe(listener) {
  if (storedEvents.length)
    listener(storedEvents);

  listeners.push(listener);
}

function reset() {
  listeners.length = 0;
  storedEvents.length = 0;
}

module.exports = { add, load, subscribe, reset };
