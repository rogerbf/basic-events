import initState from './library/initState'
import on from './library/on'
import once from './library/once'
import emit from './library/emit'

export default (target = {}) => {
  const subscriptions = initState()

  return Object.assign(
    target,
    on(subscriptions),
    emit(subscriptions),
    once(subscriptions)
  )
}
