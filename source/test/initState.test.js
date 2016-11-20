import test from 'tape'
import initState from '../library/initState'

test(`initState is a function`, assert => {
  assert.equal(typeof (initState), `function`)
  assert.end()
})

test(`initState()`, assert => {
  const subscriptions = initState()
  assert.equal(subscriptions.hasOwnProperty(`add`), true)
  assert.equal(subscriptions.hasOwnProperty(`get`), true)
  assert.equal(subscriptions.hasOwnProperty(`remove`), true)
  assert.end()
})

test(`add, get, remove, get`, assert => {
  const subscriptions = initState()
  const subscriber = () => {}
  subscriptions.add({ eventName: `channel`, subscriber })
  assert.deepEqual(subscriptions.get(`channel`), [ subscriber ])
  subscriptions.remove({ eventName: `channel`, subscriber })
  assert.deepEqual(subscriptions.get(`channel`), [])
  assert.end()
})
