export default target => ({
  remove: ({ eventName, subscriber }) => {
    if (target.hasOwnProperty(eventName)) {
      target[eventName] = target[eventName].filter(l => l !== subscriber)
      if (target[eventName].length === 0) {
        delete target[eventName]
      }
    } else {
      return null
    }
  }
})
