function GoalItem({ id, text, completed, onCompletedChange, onDelete }) {
  return (
    <li>
      <label
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? 'gray' : 'black',
        }}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => onCompletedChange(id, event.target.checked)}
        />
        {text} {!completed && '(진행 중)'}
      </label>
      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
    </li>
  )
}

export default GoalItem
