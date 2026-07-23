import { useFetch } from './hooks/useFetch'

export function RecommendedGoals(){
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
        <selection>
            <h2>추천 학습 목표</h2>

            <ul>
                {recommendedGoals.map((goal) => (
                    <li
                        key={goal.id}
                    >
                        {goal.text}
                    </li>
                ))}
            </ul>
        </selection>
    )
}