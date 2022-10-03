import React, { useState } from "react";
import Titel from "./Titel";
import Count from "./Count";
import Button from "./Button";
const UseCallbackparent = () => {
  const [age, setAge] = useState(30);
  const [salary, SetSalary] = useState(5000);
  const handelAge = () => {
    setAge(age + 1);
  };
  const handelSalary= () => {
    SetSalary(salary + 1000);
  };
  return (
    <div>
      <h1>UseCallback hook</h1>
      <Titel />
      <Count text={"Age"} count={age} />
      <Button handelAge={handelAge}  children={"Add Age"}/>
      <Count text={"salary"} count={salary} />
      <Button handelSalary={handelSalary} children={"Add SAlary"} />
    </div>
  );
};

export default UseCallbackparent;
