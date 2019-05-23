import { exception } from '../utils/exception.function'
import { safe } from 'react-replay/safe.function'
import { greetingReducer } from './greeting/greeting.reducer'
import { counterEngineReducer } from './counter-engine/counter-engine.reducer';

export const reducer = ({ state, action }) => {
  if (action && !action.type) exception('No action.type provided')
  return {
    greeting: greetingReducer(action, safe(state, ['greeting'])),
    counterEngine: counterEngineReducer(action, safe(state, ['counterEngine']))
  }
}
