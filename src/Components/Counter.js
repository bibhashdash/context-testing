import { CounterContext } from "../Contexts/CounterContext";
import { useContext } from "react";
import CounterButtons from "./CounterButtons";
import OddOrEven from './OddOrEven';
const Counter = ()=> {
    const {count } = useContext(CounterContext)
    return (
        <div>
            <h2>The count is:-</h2>
            <h2>{count}</h2>
            <CounterButtons />
            <OddOrEven />
        </div>
    );
}

export default Counter;