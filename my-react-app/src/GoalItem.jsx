import { useState } from 'react'

function GoalItem({ id, text, completed, onCompletedChange, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(text)

  function startEditing(){
    setEditText(text)
    setIsEditing(true)
  }

  function saveEdit(event){
    event.preventDefault()

    const trimText = editText.trim()

    if(trimText === ''){
      return
    }

    onEdit(id, trimText)
    setIsEditing(false)
  }

  function cancelEdit(){
    setEditText(text)
    setIsEditing(false)
  }

  if(isEditing){
    return (
      <li>
        <form onSubmit={saveEdit}>
          <input
            type="text"
            value={editText}
            onChange={(event) => 
              setEditText(event.target.value)
            }
            autoFocus
          />

          <button type="submit">
            저장
          </button>

          <button
            type="button"
            onClick={cancelEdit}
          >
            취소
          </button>
        </form>
      </li>
    )
  }
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

      <button type="button" onClick={startEditing}>
        수정
      </button>

      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
    </li>
  )
}

export default GoalItem
