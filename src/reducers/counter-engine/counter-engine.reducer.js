import { safe } from 'react-replay/safe.function'
import { dispatch, addSubscription, getSubscription, removeSubscription } from 'react-replay'

const startEngineAndReturnState = value => {
  const counterEngineSubscription = () => { 
    const id = setInterval(() => dispatch({ type: 'INC_counterEngine' }), 1000)
    return {
      destroy: () => clearInterval(id)
    }
  }
  addSubscription('counterEngine', counterEngineSubscription())
  return { active: true, value }
}

const stopEngineAndReturnState = value => {
  getSubscription('counterEngine').destroy()
  removeSubscription('counterEngine')
  return { active: false, value }
}

export const counterEngineReducer = (
  action,
  state = { value: 1, active: false }
) =>
  safe(action, ['type']) === 'START_counterEngine'
    ? startEngineAndReturnState(state.value)
    : safe(action, ['type']) === 'STOP_counterEngine'
      ? stopEngineAndReturnState(state.value)
      : safe(action, ['type']) === 'INC_counterEngine'
        ? Object.assign({}, state, { value: state.value + 1 })
        : state
