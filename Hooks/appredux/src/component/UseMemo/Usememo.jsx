import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Usememo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };
  const IncrementTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEvent = useMemo(() => {
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div>
      <div>
        <button onClick={() => IncrementOne()}>Count One -{countOne}</button>
        <span>{isEvent? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={() => IncrementTwo()}>Count Two -{countTwo}</button>
      </div>
    </div>
  );
};

export default Usememo;
