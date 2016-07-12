module.exports = subscriptions => ({
  on: (eventName, subscriber) => {
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName] = subscriptions[eventName].concat([subscriber])
    } else {
      subscriptions[eventName] = [subscriber]
    }
    return () => {
      subscriptions[eventName] = subscriptions[eventName]
        .filter(s => s !== subscriber)
    }
  }
})
