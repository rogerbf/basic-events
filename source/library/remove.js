export default target => ({
  remove: ({ eventName, listener }) => {
    if (target.hasOwnProperty(eventName)) {
      target[eventName] = target[eventName].filter(l => l !== listener)
      if (target[eventName].length === 0) {
        delete target[eventName]
      }
    } else {
      return null
    }
  }
})
