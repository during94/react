import { useState, useEffect } from 'react'
import './App.css'
import GoalItem from './GoalItem'
import { addGoal } from './addGoalUtil'
import { GoalForm } from './GoalForm'
// 참조하는 jsx에서 export function "명칭" 형태일 경우 { "function명" } 형태로 import가 필요
// 참조하는 jsx에서 exrpot defualt "명칭" 형태일 경우 import "function명" 형태로 import가 필요
import { GoalFilter } from './GoalFilter'

function App() {
  const [goals, setGoals] = useState(() => {
    try {
      const saveGoals = localStorage.getItem('react-goals')

      return saveGoals ? JSON.parse(saveGoals) : []
    } catch (error) {
      console.error('저장된 목표를 불러오지 못했습니다.', error)
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('react-goals', JSON.stringify(goals))
  }, [goals])

  const [filter, setFilter] = useState('all')

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

  function updateGoalText(id, newText) {
    const trimText = newText.trim()

    if(trimText === ''){
      return
    }

    setGoals((currentGoals) => 
      currentGoals.map((goal) => {
        if(goal.id === id) {
          return {...goal, text: trimText}
        }

        return goal
      })
    )
  }

  function deleteGoal(id) {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id),
    )
  }

  const totalGoalsCount = goals.length
  const completedCount = goals.filter((goal) => goal.completed).length
  const filteredGoals = goals.filter((goal) => {
    if(filter === 'active'){
      return !goal.completed
    }

    if(filter === 'completed'){
      return goal.completed
    }

    return true
  })

  console.log("totalGoalsCount : {}", totalGoalsCount)

  return (
    <main>
      <h1>
        React 학습 목표 ({completedCount} / {totalGoalsCount})
      </h1>

      <GoalForm onAddGoal={handleAddGoal}/>

      <GoalFilter
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      {totalGoalsCount === 0 && <p>등록된 목표가 없습니다.</p>}

      {totalGoalsCount > 0 && filteredGoals.length === 0 && (
        <p>해당 조건에 맞는 목표가 없습니다.</p>
      )}

      <ul>
        {filteredGoals.map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            text={goal.text}
            completed={goal.completed}
            onCompletedChange={changeGoalCompleted}
            onDelete={deleteGoal}
            onEdit={updateGoalText}
          />
        ))}
      </ul>
    </main>
  )
}

export default App
