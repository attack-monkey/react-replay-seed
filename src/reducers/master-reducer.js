import { exception } from '../utils/exception.function'
import { greeting} from './greeting/greeting.reducer'
import { counterEngine } from './counter-engine/counter-engine.reducer';
import { combineReducers } from '../utils/combine-reducers';

export const initState = {
  greeting: 'Heya',
  counterEngine: {
    active: false,
    value: 0
  }
}

export const reducer = ({ state, action }) => {
  if (action && !action.type) exception('No action.type provided')
  return combineReducers(state, action)({
    greeting,
    counterEngine
  })
}
