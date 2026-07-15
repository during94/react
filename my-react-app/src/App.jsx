import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function decrease() {
    setCount((currentCount) => Math.max(0, currentCount - 1))
  }

  function decrease5() {
    setCount((currentCount) => Math.max(0, currentCount - 5))
  }

  function reset() {
    setCount(0)
  }

  function increase() {
    setCount((currentCount) => currentCount + 1)
  }

  function increase5() {
    setCount((currentCount) => currentCount + 5)
  }

  return (
    <main>
      <h1>카운터</h1>
      <p>현재 카운터: {count}</p>
      {count >= 10 && <p>목표 달성!</p>}

      <button onClick={decrease5}>5씩 감소</button>
      <button onClick={decrease}>감소</button>
      <button onClick={increase}>증가</button>
      <button onClick={increase5}>5씩 증가</button>
      <button onClick={reset}>초기화</button>
    </main>
  )
}

export default App
