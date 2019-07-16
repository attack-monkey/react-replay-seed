export const greetingReducer = (action, state = 'Hello World') =>
  action &&
    action.type &&
    action.to &&
    action.type === 'CHANGE_GREETING'
    ? action.to
    : state
