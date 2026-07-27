import { useContext } from "react";
import { GoalsContext } from "../contexts/GoalsContext";

export function useGoals(){
    const context = useContext(GoalsContext)

    if(context === null){
        throw new Error(
            'useGoals는 GoalsContext.Provider 안에서 사용해야 합니다.'
        )
    }

    return context
}