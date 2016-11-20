export default subscriptions => ({
  on: (eventName, subscriber) => {
    subscriptions.add({
      eventName,
      subscriber: Object.assign(subscriber, { once: false })
    })
    return () => subscriptions.remove({ eventName, subscriber })
  }
})
