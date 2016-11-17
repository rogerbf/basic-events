import test from 'tape'
import events from '../index'

test(`events`, assert => {
  assert.ok(events, `exports something`)
  assert.end()
})

test(`events()`, assert => {
  const app = events()
  assert.equal(typeof (app.on), `function`)
  assert.equal(typeof (app.once), `function`)
  assert.equal(typeof (app.emit), `function`)
  assert.end()
})

test(`events(app)`, assert => {
  const app = {}
  events(app)
  assert.equal(typeof (app.on), `function`)
  assert.equal(typeof (app.once), `function`)
  assert.equal(typeof (app.emit), `function`)
  assert.end()
})
