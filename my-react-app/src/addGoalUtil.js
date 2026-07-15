export function addGoal({ currentGoals, newGoalText }) {
  const trimmedText = newGoalText.trim()

  if (trimmedText === '') {
    return currentGoals
  }

  const newGoal = {
    id: Date.now(),
    text: trimmedText,
    completed: false,
  }

  return [...currentGoals, newGoal]
}
