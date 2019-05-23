import { safe } from 'react-replay/safe.function'

export const greetingReducer = (action, state = 'Hello World') =>
  safe(action, ['type']) &&
  safe(action, ['to']) &&
  action.type === 'CHANGE_GREETING'
    ? action.to
    : state
