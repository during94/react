import { useEffect, useState} from "react";

function sleep(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    })
}

export function useFetch(url){
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ignore = false

        async function requestData() {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch(url)

                if(!response.ok){
                    throw new Error(
                        `데이터 요청 실패 : ${response.status}`
                    )
                }

                await sleep(1000)  // 로딩중 확인을 위한 sleep

                const data = await response.json()

                if(!ignore){
                    setData(data)
                }

            } catch(requestError) {
                if(!ignore){
                    setError(requestError)
                }
            } finally {
                if(!ignore){
                    setIsLoading(false)
                }
            }
        }

        requestData()

        return () => {
            ignore = true
        }
    }, [url])

    return {
        data,
        isLoading,
        error,
    }
}