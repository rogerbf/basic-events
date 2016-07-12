const on = require('./on.js')
const emit = require('./emit.js')

module.exports = function createEventEmitter () {
  const subscriptions = {}
  return Object.assign({}, on(subscriptions), emit(subscriptions))
}
