import { useEffect } from 'react'

export function useLocalStorageSync(key, value){
    useEffect(() => {
        try {
            localStorage.setItem(
                key,
                JSON.stringify(value)
            )
        } catch (error) {
            console.error(
                `${key} 데이터를 저장하지 못했습니다.`,
                error
            )
        }
    }, [key, value])
}
