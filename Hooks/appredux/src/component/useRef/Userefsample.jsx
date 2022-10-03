import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Userefsample = () => {
  const counterref=useRef(0);
  const [data, setData] = useState(0);
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={(e) => setData(data + 1)}>increse</button>
    </div>
  );
};

export default Userefsample;
