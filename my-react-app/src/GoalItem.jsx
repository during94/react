function GoalItem({ text, completed }) {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'gray' : 'black',
      }}
    >
      {text} {!completed && '(진행 중)'}
    </li>
  )
}

export default GoalItem
