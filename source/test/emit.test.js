import test from 'tape'
import emit from '../library/emit'

test(`emit is a function`, assert => {
  assert.equal(typeof (emit), `function`)
  assert.end()
})

test(`calls subscriptions with data`, assert => {
  const subscriber = data => assert.equal(data, `some data`)
  const state = { data: [ subscriber ] }
  const subscriptions = {
    get: eventName => {
      assert.equal(eventName, `data`)
      return state[eventName]
    }
  }
  const emitter = emit(subscriptions)
  emitter.emit(`data`, `some data`)
  assert.end()
})

test(`removes subscription when once: true`, assert => {
  const subscriber = data => assert.equal(data, `some data`)
  const state = { data: [ Object.assign(subscriber, { once: true }) ] }
  const subscriptions = {
    get: eventName => {
      assert.equal(eventName, `data`)
      return state[eventName]
    },
    remove: ({ eventName, subscriber }) => {
      assert.equal(eventName, `data`)
      assert.equal(subscriber, subscriber)
    }
  }
  const emitter = emit(subscriptions)
  emitter.emit(`data`, `some data`)
  assert.end()
})
