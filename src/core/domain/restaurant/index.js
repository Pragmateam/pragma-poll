const createAggregate = require('../../infrastructure/aggregate');

module.exports = createAggregate({
  initialState: {},
  eventHandlers: {},
  commandHandlers: {
    CreateRestaurant: require('../../commands/create_restaurant')
  }
})
