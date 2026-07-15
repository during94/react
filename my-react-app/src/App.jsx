import { useState } from 'react'
import './App.css'
import CounterButton from './CounterButton'
import GoalStatus from './GoalStatus'

function App() {
  const [count, setCount] = useState(0)
  const goal = 21
  const goalReached = count >= goal

  function changeCount(amount) {
    setCount((currentCount) =>
      Math.min(goal, Math.max(0, currentCount + amount)),
    )
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <main>
      <h1>카운터</h1>
      <p>현재 숫자: {count}</p>

      <CounterButton
        label="2 증가"
        amount={2}
        onChange={changeCount}
        color="royalblue"
        disabled={goalReached}
      />
      <CounterButton
        label="3 증가"
        amount={3}
        onChange={changeCount}
        color="green"
        disabled={goalReached}
      />
      <CounterButton
        label="10 증가"
        amount={10}
        onChange={changeCount}
        color="green"
        disabled={goalReached}
      />
      <CounterButton
        label="1 감소"
        amount={-1}
        onChange={changeCount}
        color="tomato"
      />

      <button onClick={resetCount}>초기화</button>
      <GoalStatus count={count} goal={goal} />
    </main>
  )
}

export default App
