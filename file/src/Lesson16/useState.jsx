import React, { useState } from 'react';

const UseState = () => {
    const [count, setCount]=useState(0);
    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        if (count > 0) {
            setCount ( count - 1)
        }
    };
  return (
    <div style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        gridGap: "15px"}}>
        <button onClick={decrement}>-</button> 
         {count} 
        <button onClick={increment}>+</button>
    </div>
  )
}

export default UseState;