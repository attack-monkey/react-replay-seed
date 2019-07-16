export const combineReducers =
  (state, action) =>
    (reducers) =>
      Object.keys(reducers).reduce((ac, key) => {
        try {
          return Object.assign({}, ac, { [key]: reducers[key](state && state[key], action) })
        } catch (e) {
          console.error('An error occured in combineReducers')
        }
      }, {})