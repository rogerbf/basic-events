export default subscriptions => ({
  on: (eventName, subscriber) => {
    subscriptions.add({
      eventName,
      listener: Object.assign(subscriber, { once: false })
    })
    return () => subscriptions.remove({ eventName, listener: subscriber })
  }
})
