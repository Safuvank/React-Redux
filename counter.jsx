import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countIncrement, countDecrement, countReset  } from "../features/counterSlice";
import './counter.css'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(countIncrement())
    }

    const decrement = () => {
        if(count>0){
            dispatch(countDecrement())
        }
    }

    const reset = () => {
        dispatch(countReset())
    }


    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <h2 className="count">{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Counter;