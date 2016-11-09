module.exports = subscriptions => ({
  once: (eventName, subscriber) => {
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName] = (
            subscriptions[eventName]
              .concat(Object.assign(subscriber, { once: true }))
          )
    } else {
      subscriptions[eventName] = [Object.assign(
        subscriber,
        { once: true },
        { unsubscribe: () => {
          subscriptions[eventName] = (
            subscriptions[eventName]
              .filter(s => s !== subscriber)
            )
        }}
      )]
    }
    return () => {
      subscriptions[eventName] = subscriptions[eventName]
            .filter(s => s !== subscriber)
    }
  }
})
