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
    remove: ({ eventName, listener }) => {
      assert.equal(eventName, `data`)
      assert.equal(listener, subscriber)
    }
  }
  const emitter = emit(subscriptions)
  emitter.emit(`data`, `some data`)
  assert.end()
})
//
// test(`removes subscriber after call when once: true`, assert => {
//   const subscriber = Object.assign(
//     data => assert.equal(data, `some data`),
//     { once: true }
//   )
//   const subscriptions = {
//     data: [ subscriber ]
//   }
//   const emitter = emit(subscriptions)
//   emitter.emit(`data`, `some data`)
//   assert.deepEqual(subscriptions, { data: [] })
//   assert.end()
// })
//
// test(`does not crash when there are no subscriptions`, assert => {
//   const subscriptions = {}
//   const emitter = emit(subscriptions)
//   assert.doesNotThrow(emitter.emit.bind(null, `data`, `some data`))
//   assert.end()
// })
//
// test(`does not crash when there are no subscriptions (empty array)`, assert => {
//   const subscriptions = { data: [] }
//   const emitter = emit(subscriptions)
//   assert.doesNotThrow(emitter.emit.bind(null, `data`, `some data`))
//   assert.end()
// })
