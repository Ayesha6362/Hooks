import React from "react";
import Fifth from "./Fifth";
import { firstcontextApi } from "./First";

const Fourth = () => {
  return (
    <div>
      <h1> This is Fourth comonent</h1>
      <firstcontextApi.Consumer>
        {(item) => <h1>hello{item.username}</h1>}
      </firstcontextApi.Consumer>
      <Fifth />
    </div>
  );
};

export default Fourth;
