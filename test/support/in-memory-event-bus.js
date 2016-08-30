const memory = [];

module.exports.last = function last () {
  return memory[memory.length - 1] || {};
}

module.exports.emit = function emit (event, attributes) {
  memory.push({ event, attributes });
}

module.exports.reset = function () {
  memory.length = 0;
}
