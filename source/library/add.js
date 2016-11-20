export default target => ({
  add: ({ eventName, subscriber }) => {
    if (target.hasOwnProperty(eventName)) {
      target[eventName] = [ ...target[eventName], subscriber ]
    } else {
      target[eventName] = [ subscriber ]
    }
  }
})
