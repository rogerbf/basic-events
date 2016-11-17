# basic-events

A very basic event emitter with three methods: `.on`, `.once` and `.emit`.

## usage

``` javascript
import events from 'basic-events'

const app = {}
events(app)
// or
const app = events()
```

### `.on()`

```javascript
const unsubscribe = app.on(`data`, console.log)
app.emit(`data`, `poof`)
// `poof`
unsubscribe()
app.emit(`data`, `wroom`)
// nothing
```

### `.once()`

```javascript
const unsubscribe = app.once(`start`, console.log)
app.emit(`start`, `running`)
// `running`
app.emit(`start`, `jumping`)
// nothing
```
