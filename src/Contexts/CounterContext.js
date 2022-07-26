import {useState, createContext, useEffect} from "react";

export const CounterContext = createContext();

const CounterContextProvider = (props)=> {
    const [count, setCount] = useState(0)
    const [stateOddEven, setStateOddEven] = useState("???")
    const increaseCount = ()=> {
        setCount(count + 1)
    }
    const decreaseCount = ()=> {
        setCount(count - 1)
    }
    const useCheckOddEven = (count)=> {
        useEffect(()=> {
            if(count % 2 === 0) {
                setStateOddEven("even")
            }
            else {
                setStateOddEven("odd")
            }
        }, [count])
    }
    

    const value = {
        count, 
        increaseCount,
        decreaseCount,
        useCheckOddEven,
        stateOddEven
    }
    
    return (
        <CounterContext.Provider value={value}>
        {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider