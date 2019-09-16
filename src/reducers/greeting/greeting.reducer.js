export const greeting = (state = 'Hello World', action) =>
  action &&
    action.type &&
    action.to &&
    action.type === 'CHANGE_GREETING'
      ? action.to
      : state
