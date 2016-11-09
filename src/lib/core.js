const on = require('./on')
const emit = require('./emit')
const once = require('./once')

module.exports = function createEventEmitter () {
  const subscriptions = {}
  return Object.assign(
    {},
    on(subscriptions),
    emit(subscriptions),
    once(subscriptions)
  )
}
