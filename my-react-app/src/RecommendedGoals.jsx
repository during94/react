import { useEffect, useState } from "react";

// function sleep(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, milliseconds)
//     })
// }

export function RecommendedGoals(){
    const [recommendedGoals, setRecommendedGoals] = useState([])

    const [isLoding, setIsLoding] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadRecommendedGoals() {
            try {
                setIsLoding(true)
                setError(null)

                const response = await fetch(
                    '/recommended-goals.json'
                )

                // await sleep(10000)

                if(!response.ok){
                    throw new Error(
                        `데이터 요청 실패 : ${response.status}`
                    )
                }

                const data = await response.json()

                setRecommendedGoals(data)

            } catch(requestError) {
                setError(requestError)
            } finally {
                setIsLoding(false)
            }
        }

        loadRecommendedGoals()
    }, [])

    if(isLoding){
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