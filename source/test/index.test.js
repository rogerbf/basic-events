import test from 'tape'
import events from '../index'

test(`events`, assert => {
  assert.ok(events, `exports something`)
  assert.end()
})
