import { useContext, } from "react"
import { CounterContext } from "../Contexts/CounterContext"

const OddOrEven = ()=> {
    const { stateOddEven} = useContext(CounterContext)
   
    
    return (
        <div>
            <p>The count is...{stateOddEven}</p>
        </div>
    )
}

export default OddOrEven