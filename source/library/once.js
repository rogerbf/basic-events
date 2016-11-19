export default subscriptions => ({
  once: (eventName, subscriber) => {
    subscriptions.add({
      eventName,
      listener: Object.assign(subscriber, { once: true })
    })
    return () => subscriptions.remove({ eventName, listener: subscriber })
  }
})
