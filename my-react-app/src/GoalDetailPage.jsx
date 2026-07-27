import { Link, useParams } from 'react-router'

export function GoalDetailPage({ goals }){
    const { goalId } = useParams()

    const goal = goals.find(
        (goal) => String(goal.id) === goalId
    )

    if(!goal){
        return (
            <main>
                <h1>목표를 찾을 수 없습니다.</h1>
                <p>삭제되었거나 존재하지 않는 목표입니다.</p>

                <Link to="/">
                    목표 목록으로 돌아가기
                </Link>
            </main>
        )
    }

    return (
        <main>
            <h1>목표 상세</h1>

            <dl>
                <dt>목표 내용</dt>
                <dd>{goal.text}</dd>

                <dt>진행 상태</dt>
                <dd>{goal.completed ? '완료' : '진행 중'}</dd>
            </dl>

            <Link to="/">
                목표 목록으로 돌아가기
            </Link>
        </main>
    )
}