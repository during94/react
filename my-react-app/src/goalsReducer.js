import { addGoal } from './addGoalUtil'

export function goalsReducer(goals, action){
    console.log('goals : ', goals)
    console.log('action : ', action)
    switch (action.type){
        case 'added':
            return addGoal({
                currentGoals: goals,
                newGoalText: action.newGoalText
            })
        
        case 'completedChanged':
            return goals.map((goal) => {
                if(goal.id === action.id) {
                    return {...goal, completed: action.completed}
                }

                return goal
            })

        case 'deleted':
            return goals.filter(
                (goal) => goal.id !== action.id
            )

        case 'textUpdated': {
            const trimText = action.text.trim()

            if(trimText === ''){
                return goals
            }

            return goals.map((goal) => {
                if(goal.id === action.id){
                    return {...goal, text: trimText}
                }

                return goal
            })
        }

        default:
            throw new Error(
                '처리할 수 없는 action 입니다. : ${action.type}',
            )
    }
}