import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return { count: state.count + 1};
    case "decrement":
      return { count: state.count - 1};      
      default:
  }
};
const UseReducer = () => {
  /*      key,   changeKey             function  initialValue*/ 
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridGap: "15px",
    }}>
      <button onClick={()=> dispatch({type: "decrement"})} style={{padding: "0 20px"}}>-</button>
      {state.count}
      <button onClick={()=>dispatch({type: "incement"})} style={{padding: "0 20px"}} >+</button>
    </div>
  );
}

export default UseReducer;