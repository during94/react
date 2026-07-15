function GoalStatus({ count, goal }) {
  if (count >= goal) {
    return <p>🎉 목표를 달성했습니다!</p>
  }

  return <p>목표까지 {goal - count}번 남았습니다.</p>
}

export default GoalStatus
