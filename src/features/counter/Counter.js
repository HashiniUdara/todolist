import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { 
        increment, 
        decrement,       // action creators
        reset,
        incrementByAmount
        } from './counterSlice'

const Counter = () => {
  const count = useSelector((state)=>state.counter.count);  //useSelector <- get data from store    accept a function as an input parameter
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;  // check whether the incrementAmout is a number or not

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset);
  }
  const dispatch = useDispatch() // useDispatch() returns a reference to the dispatch function from the redux store    ,  can use to dispatch actions as we need
  return (
    <div>
      <section>
        <div>
          <h3>{count}</h3>
          <button onClick={()=>dispatch(increment())} ><h3>+</h3></button>
          <button onClick={()=>dispatch(decrement())} ><h3>-</h3></button>
        </div>
        <input
          type='text'
          value={incrementAmount}
          onChange ={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))} ><h3>add amount</h3></button>
          <button onClick={resetAll} ><h3>Reset</h3></button>
        </div>
      </section>
    </div>
  )
}

export default Counter;
