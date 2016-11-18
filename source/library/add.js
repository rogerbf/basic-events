export default target => ({
  add: ({ eventName, listener }) => {
    if (target.hasOwnProperty(eventName)) {
      target[eventName] = [ ...target[eventName], listener ]
    } else {
      target[eventName] = [ listener ]
    }
  }
})
