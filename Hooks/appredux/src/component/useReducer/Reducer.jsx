import React from "react";
import { useReducer } from "react";

export const InitialState = {
  count: 0,
  
};
export const reducer = (state, action) => {
  switch (action) {
    case "INCREMEMT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count -1,
      };
      case "RESET":
      return {
        ...state,
        count: state.count =0,
      };
  }
};

const Reducer = () => {
  const [GetterState, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      <h1>hello Reducer</h1>
      <h2>counter:{GetterState.count}</h2>
      <button onClick={() => dispatch("INCREMEMT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>
    </div>
  );
};

export default Reducer;
