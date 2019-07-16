import * as React from 'react'
import { dispatch, goto } from 'react-replay'

const counterEngine = (active, greeting) => {
  return greeting === 'Sup World' && !active
    ? dispatch({ type: 'START_counterEngine' })
    : greeting !== 'Sup World' && active
      ? dispatch({ type: 'STOP_counterEngine' })
      : {}
}

export const firstComponent = ({ state }) => {
  counterEngine(
    state && state.counterEngine && state.counterEngine.active,
    state && state.greeting
  )
  return (
    <div>
      <h1>{state && state.greeting}</h1>
      <h2>Counter --> {state && state.counterEngine && state.counterEngine.value}</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        onClick={() => dispatch({ type: 'CHANGE_GREETING', to: 'Sup World' })}
      >
        push me
      </button>
      <button
        onClick={() => dispatch({ type: 'CHANGE_GREETING', to: 'Hello World' })}
      >
        no ... push me
      </button>
      <br />
      <button onClick={() => goto('/catland?cat=charlie')}>change route</button>
      <br />
      <button onClick={() => goto('/')}>change route back</button>
    </div>
  )
}
