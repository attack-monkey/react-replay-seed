import { exception } from '../utils/exception.function'
import { greetingReducer } from './greeting/greeting.reducer'
import { counterEngineReducer } from './counter-engine/counter-engine.reducer';

export const reducer = ({ state, action }) => {
  if (action && !action.type) exception('No action.type provided')
  if (!state) exception('No state provided')
  return {
    greeting: greetingReducer(action, state.greeting),
    counterEngine: counterEngineReducer(action, state.counterEngine)
  }
}
