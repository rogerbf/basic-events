import test from 'tape'
import once from '../library/once'

const noop = () => {}

test(`once is a function`, assert => {
  assert.equal(typeof (once), `function`)
  assert.end()
})

test(`adds subscriber to subscriptions object`, assert => {
  const subscribers = {}
  const events = once(subscribers)
  const fn = data => noop()
  const unsubscribe = events.once(`message`, fn)
  assert.deepEqual(subscribers, { message: [fn] })
  unsubscribe()
  assert.deepEqual(subscribers, { message: [] })
  assert.end()
})

test(`subscriber to subscriptions object (multiple subscribers)`, assert => {
  const fnA = () => noop()
  const subscribers = { primary: [fnA] }
  const events = once(subscribers)
  const fnB = data => noop()
  events.once(`primary`, fnB)
  assert.deepEqual(subscribers, { primary: [fnA, fnB] })
  assert.end()
})
