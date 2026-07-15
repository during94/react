import { useState } from 'react'
import './App.css'
import GoalItem from './GoalItem'
import { addGoal } from './addGoalUtil'
import { GoalForm } from './GoalForm'

function App() {
  const [goals, setGoals] = useState([])

  function handleAddGoal(newGoalText) {
    setGoals((currentGoals) => addGoal({ currentGoals, newGoalText }))
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

      <GoalForm onAddGoal={handleAddGoal}/>

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
