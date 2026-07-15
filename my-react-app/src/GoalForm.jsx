import { useState } from 'react'

export function GoalForm({ onAddGoal }){
    const [newGoalText, setNewGoalText] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if(newGoalText.trim() === ''){
            return
        }

        onAddGoal(newGoalText)
        setNewGoalText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newGoalText}
                onChange={(event) => setNewGoalText(event.target.value)}
                placeholder="새로운 목표"
            />
            <button type="submit">목표 추가</button>
        </form>
    )
}