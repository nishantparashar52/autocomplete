import { useInterval } from "../hooks/useInterval"
export default function Logger() {
    function cb() {
        console.log('logger')
    }
    useInterval(cb, 1000)
    return (
        <div>Inside </div>
    )
}