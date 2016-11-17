import test from 'tape'
import emit from '../library/emit'

test(`emit is a function`, assert => {
  assert.equal(typeof (emit), `function`)
  assert.end()
})

test(`calls subscriptions with data`, assert => {
  const subscriptions = {
    data: [ data => assert.equal(data, `some data`) ]
  }
  const emitter = emit(subscriptions)
  emitter.emit(`data`, `some data`)
  assert.end()
})

test(`removes subscriber after call when once: true`, assert => {
  const subscriber = Object.assign(
    data => assert.equal(data, `some data`),
    { once: true }
  )
  const subscriptions = {
    data: [ subscriber ]
  }
  const emitter = emit(subscriptions)
  emitter.emit(`data`, `some data`)
  assert.deepEqual(subscriptions, { data: [] })
  assert.end()
})

test(`does not crash when there are no subscriptions`, assert => {
  const subscriptions = {}
  const emitter = emit(subscriptions)
  assert.doesNotThrow(emitter.emit.bind(null, `data`, `some data`))
  assert.end()
})

test(`does not crash when there are no subscriptions (empty array)`, assert => {
  const subscriptions = { data: [] }
  const emitter = emit(subscriptions)
  assert.doesNotThrow(emitter.emit.bind(null, `data`, `some data`))
  assert.end()
})
