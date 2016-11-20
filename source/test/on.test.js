import test from 'tape'
import on from '../library/on'

test(`on is a function`, assert => {
  assert.equal(typeof (on), `function`)
  assert.end()
})

test(`adds subscriber to subscriptions object and returns unsubscribe function`, assert => {
  const subscriber = () => {}
  const subscriptions = {
    add: ({eventName, subscriber}) => {
      assert.equal(eventName, `message`)
      assert.deepEquals(subscriber, Object.assign(subscriber, { once: false }))
    }
  }
  const core = on(subscriptions)
  core.on(`message`, subscriber)
  assert.end()
})

test(`unsubscribe`, assert => {
  const subscriber = () => {}
  const subscriptions = {
    add: ({eventName, subscriber}) => {
      assert.equal(eventName, `message`)
      assert.deepEquals(subscriber, Object.assign(subscriber, { once: false }))
    },
    remove: ({eventName, subscriber}) => {
      assert.equal(eventName, `message`)
      assert.deepEqual(subscriber, Object.assign(subscriber, { once: false }))
    }
  }
  const core = on(subscriptions)
  const unsubscribe = core.on(`message`, subscriber)
  assert.equal(typeof (unsubscribe), `function`)
  unsubscribe()
  assert.end()
})
