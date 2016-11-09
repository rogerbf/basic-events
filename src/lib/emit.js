module.exports = subscriptions => ({
  emit: (eventName, data) => {
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName].map(subscriber => {
        subscriber(data)
        if (subscriber.once) { subscriber.unsubscribe() }
      })
    }
  }
})
