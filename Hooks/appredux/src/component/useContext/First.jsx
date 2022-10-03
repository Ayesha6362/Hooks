import React, { createContext } from "react";
import Second from "./Second";

export const firstcontextApi = createContext();
const First = () => {
    const username="jhon wick"
    const movi={ironma:"RDJ" ,thore:"asgard"}
  return (
    <div>
      <h1>This is First componenet</h1>
      <firstcontextApi.Provider value={{first:username,second:movi}}>
        <Second />
      </firstcontextApi.Provider>
    </div>
  );
};

export default First;
