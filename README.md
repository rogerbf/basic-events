# basic-events

A very basic event emitter with two methods: `.on` and `.emit`.

## Usage

``` javascript
const events = require('basic-events')()

const unsubscribe = events.on('data', data => console.log(data))

events.emit('data', 'poof')
// logs 'poof'

unsubscribe()

events.emit('data', 'wroom')
// nothing
```
