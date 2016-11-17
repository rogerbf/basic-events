export default subscriptions => ({
  emit: (eventName, data) => {
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName].map(subscriber => {
        subscriber(data)
        if (subscriber.once) {
          subscriptions[eventName] = subscriptions[eventName]
            .filter(s => s !== subscriber)
        }
      })
    }
  }
})
