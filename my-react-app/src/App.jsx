import { useState } from 'react'
import './App.css'
import GoalItem from './GoalItem'
import { addGoal } from './addGoalUtil'

function App() {
  const [goals, setGoals] = useState([])
  const [newGoalText, setNewGoalText] = useState('')

  function handleAddGoal() {
    if (newGoalText.trim() === '') {
      return
    }

    setGoals((currentGoals) => addGoal({ currentGoals, newGoalText }))
    setNewGoalText('')
  }

  function changeGoalCompleted(id, completed) {
    setGoals((currentGoals) =>
      currentGoals.map((goal) => {
        if (goal.id === id) {
          return { ...goal, completed }
        }

        return goal
      }),
    )
  }

  function deleteGoal(id) {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id),
    )
  }

  const totalGoalsCount = goals.length
  const completedCount = goals.filter((goal) => goal.completed).length

  return (
    <main>
      <h1>
        React 학습 목표 ({completedCount} / {totalGoalsCount})
      </h1>

      <input
        type="text"
        value={newGoalText}
        onChange={(event) => setNewGoalText(event.target.value)}
        placeholder="새로운 목표"
      />
      <button type="button" onClick={handleAddGoal}>
        목표 추가
      </button>

      {totalGoalsCount === 0 && <p>등록된 목표가 없습니다.</p>}

      <ul>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            text={goal.text}
            completed={goal.completed}
            onCompletedChange={changeGoalCompleted}
            onDelete={deleteGoal}
          />
        ))}
      </ul>
    </main>
  )
}

export default App
