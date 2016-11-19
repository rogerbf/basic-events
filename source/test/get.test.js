import test from 'tape'
import get from '../library/get'

test(`is a function`, assert => {
  assert.equal(typeof (get), `function`)
  assert.end()
})

test(`returns array of subscribers`, assert => {
  const state = {
    message: [
      () => {},
      () => {}
    ]
  }
  const core = get(state)
  assert.deepEqual(core.get(`message`), state.message)
  assert.end()
})
