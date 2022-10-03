import React, { useContext } from "react";
import Third from "./Third";
import { firstcontextApi } from "./First";
const Second = () => {
  const datarecived = useContext(firstcontextApi);
  return (
    <div>
      <h1>This is Second compnent{datarecived.second.ironma}</h1>
      <Third />
    </div>
  );
};

export default Second;
