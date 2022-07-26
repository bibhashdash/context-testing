import { useContext } from "react"
import { CounterContext } from "../Contexts/CounterContext"

const CounterButtons = ()=> {
    const {increaseCount, decreaseCount} = useContext(CounterContext)
    return(
        <div>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>decrease</button>
        </div>
    )
}

export default CounterButtons