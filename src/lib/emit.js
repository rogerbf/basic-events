module.exports = subscriptions => ({
  emit: (eventName, data) => {
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName].map(s => s(data))
    }
  }
})
