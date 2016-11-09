module.exports = subscriptions => ({
  on: (eventName, subscriber) => {
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName] = (
        subscriptions[eventName]
          .concat(Object.assign(subscriber, { once: false }))
      )
    } else {
      subscriptions[eventName] = [Object.assign(subscriber, { once: false })]
    }
    return () => {
      subscriptions[eventName] = subscriptions[eventName]
        .filter(s => s !== subscriber)
    }
  }
})
