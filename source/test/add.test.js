import test from 'tape'
import add from '../library/add.js'

test(`add is a function`, assert => {
  assert.equal(typeof (add), `function`)
  assert.end()
})

test(`add(prop, fn)`, assert => {
  const state = {}
  const core = add(state)
  const subscriber = () => {}
  core.add({ eventName: `message`, subscriber })
  const expected = { message: [ subscriber ] }
  assert.deepEqual(state, expected)
  assert.end()
})

test(`add(prop, fn)`, assert => {
  const state = {}
  const core = add(state)
  const subscribers = [ () => {}, () => {} ]
  const subscriber = () => {}
  subscribers.map(subscriber => core.add({ eventName: `message`, subscriber }))
  subscribers.map(subscriber => core.add({ eventName: `notification`, subscriber }))
  core.add({ eventName: `notification`, subscriber })
  const expected = { message: [ ...subscribers ], notification: [ ...subscribers, subscriber ] }
  assert.deepEqual(state, expected)
  assert.end()
})
