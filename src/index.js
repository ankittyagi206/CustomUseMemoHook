import React, {useMemo, useState} from 'react'
import ReactDOM from 'react-dom'
import useCustomMemo from './use-custom-memo'

function App() {
  const [counter, setCounter] = useState(0)
  const [decCounter, setDecCounter] = useState(100)

  function heavyFunction() {
    console.log('re-rendered')
    return counter * counter
  }
  const memoizedValue = useCustomMemo(() => heavyFunction(), [counter])

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2>Squre: {memoizedValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Decrement: {decCounter}</h2>
      <button onClick={() => setDecCounter(decCounter - 1)}>Decrement</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
