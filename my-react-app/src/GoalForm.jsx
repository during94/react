import { useRef, useState } from 'react'

export function GoalForm({ onAddGoal }){
    const [newGoalText, setNewGoalText] = useState('')
    const inputRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()

        if(newGoalText.trim() === ''){
            inputRef.current?.focus()
            return
        }

        onAddGoal(newGoalText)
        setNewGoalText('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={newGoalText}
                onChange={(event) => setNewGoalText(event.target.value)}
                placeholder="새로운 목표"
            />
            <button type="submit">목표 추가</button>
        </form>
    )
}