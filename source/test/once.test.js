import test from 'tape'
import once from '../library/once'

test(`once is a function`, assert => {
  assert.equal(typeof (once), `function`)
  assert.end()
})

test(`adds subscriber to subscriptions object and returns unsubscribe function`, assert => {
  const subscriber = () => {}
  const subscriptions = {
    add: ({eventName, subscriber}) => {
      assert.equal(eventName, `message`)
      assert.deepEquals(subscriber, Object.assign(subscriber, { once: true }))
    }
  }
  const core = once(subscriptions)
  core.once(`message`, subscriber)
  assert.end()
})

test(`unsubscribe`, assert => {
  const subscriber = () => {}
  const subscriptions = {
    add: ({eventName, subscriber}) => {
      assert.equal(eventName, `message`)
      assert.deepEquals(subscriber, Object.assign(subscriber, { once: true }))
    },
    remove: ({eventName, subscriber}) => {
      assert.equal(eventName, `message`)
      assert.deepEqual(subscriber, Object.assign(subscriber, { once: true }))
    }
  }
  const core = once(subscriptions)
  const unsubscribe = core.once(`message`, subscriber)
  assert.equal(typeof (unsubscribe), `function`)
  unsubscribe()
  assert.end()
})
