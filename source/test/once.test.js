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
  events.once(`message`, fn)
  assert.deepEqual(subscribers, { message: [fn] })
  assert.end()
})
