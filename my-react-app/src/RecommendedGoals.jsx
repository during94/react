import { useFetch } from './hooks/useFetch'

export function RecommendedGoals({ onAddGoal }){
    const {
        data: recommendedGoals,
        isLoading,
        error,
    } = useFetch('/recommended-goals.json')

    if(isLoading){
        return (
            <p>추천 학습 목표를 가져오는 중입니다....</p>
        )
    }

    if(error !== null) {
        return (
            <p>
                추천 학습 목표를 가져오지 못했습니다.
            </p>
        )
    }

    return (
        <section>
            <h2>추천 학습 목표</h2>

            <ul>
                {recommendedGoals.map((goal) => (
                    <li
                        key={goal.id}
                    >
                        <span>{goal.text}</span>

                        <button
                            type="button"
                            onClick={() => onAddGoal(goal.text)}
                        >
                            추가
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}