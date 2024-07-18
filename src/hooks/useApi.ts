import { useEffect, useState } from 'react'
type useApiProps = {
    url : string
}
export function useApi(url: useApiProps['url']) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            try {
                const response = await fetch(url).then(res => res.json())
                if(response) {
                    setData(response)
                    setLoading(false)
                }
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [url])
    return {
        data,
        error,
        loading
    }

}