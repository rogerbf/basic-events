import add from './add'
import remove from './remove'
import get from './get'

export default () => {
  const state = {}
  return Object.assign(
    {},
    add(state),
    remove(state),
    get(state)
  )
}
