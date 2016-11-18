export default target => ({
  get: eventName => {
    if (target.hasOwnProperty(eventName)) {
      return target[eventName]
    }
  }
})
