import test from 'tape'
import on from '../library/on'

const noop = () => {}

test(`on is a function`, assert => {
  assert.equal(typeof (on), `function`)
  assert.end()
})

test(`adds subscriber to subscriptions object and returns unsubscribe function`, assert => {
  const subscribers = {}
  const events = on(subscribers)
  const fn = data => noop()
  const unsubscribe = events.on(`message`, fn)
  assert.equal(typeof (unsubscribe), `function`)
  assert.deepEqual(subscribers, { message: [fn] })
  unsubscribe()
  assert.deepEqual(subscribers, { message: [] })
  // TODO empty properties should be removed -> subscribers {}
  assert.end()
})

test(`adds/removes a second subscriber`, assert => {
  const fnA = data => noop()
  const subscribers = {
    ping: [fnA]
  }
  const events = on(subscribers)
  const fnB = data => noop()
  const unsubscribeB = events.on(`ping`, fnB)
  assert.deepEqual(subscribers, { ping: [fnA, fnB] })
  unsubscribeB()
  assert.deepEqual(subscribers, { ping: [fnA] })
  assert.end()
})
