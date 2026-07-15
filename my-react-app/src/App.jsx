import './App.css'
import GoalItem from './GoalItem'

function App() {
  const goals = [
    { id: 1, text: '컴포넌트 이해하기', completed: true },
    { id: 2, text: 'Props 이해하기', completed: true },
    { id: 3, text: '배열 렌더링 배우기', completed: false },
    { id: 4, text: '목표 추가해보기', completed: false },
    { id: 5, text: '검사 받기', completed: false },
  ]

  const totalGoalsCount = goals.length
  const completedCount = goals.filter((goal) => goal.completed).length

  return (
    <main>
      <h1>
        React 학습 목표 ({completedCount} / {totalGoalsCount})
      </h1>

      <ul>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            text={goal.text}
            completed={goal.completed}
          />
        ))}
      </ul>
    </main>
  )
}

export default App
