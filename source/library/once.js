export default subscriptions => ({
  once: (eventName, subscriber) => {
    subscriptions.add({
      eventName,
      subscriber: Object.assign(subscriber, { once: true })
    })
    return () => subscriptions.remove({ eventName, subscriber })
  }
})
