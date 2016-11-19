export default subscriptions => ({
  emit: (eventName, data) => {
    subscriptions.get(eventName).map(subscriber => {
      subscriber(data)
      if (subscriber.once) {
        subscriptions.remove({ eventName, listener: subscriber })
      }
    })
  }
})
