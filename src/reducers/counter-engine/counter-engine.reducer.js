import { dispatch, addSubscription, getSubscription, removeSubscription } from '../../../node_modules/react-replay/src'

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

export const counterEngine = (
  state = { value: 1, active: false },
  action
) =>
  action.type === 'START_counterEngine'
    ? startEngineAndReturnState(state.value)
    : action.type === 'STOP_counterEngine'
      ? stopEngineAndReturnState(state.value)
      : action.type === 'INC_counterEngine'
        ? Object.assign({}, state, { value: state.value + 1 })
        : state
