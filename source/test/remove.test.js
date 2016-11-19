import test from 'tape'
import remove from '../library/remove'

test(`exports a function`, assert => {
  assert.equal(typeof (remove), `function`)
  assert.end()
})

test(`removes listener`, assert => {
  const subscriber = () => {}
  const state = {
    message: [ subscriber ]
  }
  const core = remove(state)
  core.remove({ eventName: `message`, listener: subscriber })
  const expected = {}
  assert.deepEqual(state, expected)
  assert.end()
})

test(`removes the correct listener`, assert => {
  const subscriberA = () => {}
  const subscriberB = () => {}
  const state = {
    message: [subscriberA, subscriberB]
  }
  const core = remove(state)
  core.remove({ eventName: `message`, listener: subscriberB })
  const expected = { message: [ subscriberA ] }
  assert.deepEqual(state, expected)
  assert.end()
})

test(`remove non existing listener`, assert => {
  const state = {
    message: []
  }
  const core = remove(state)
  assert.doesNotThrow(
    core.remove.bind(null, { eventName: `notification`, listener: () => {} }),
    null
  )
  assert.end()
})
