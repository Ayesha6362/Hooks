import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Ref = () => {
    const [inputdat,setinputData]=useState("");
    const [counter,setCounter]=useState(0);
    const count=userRef(null)
    useEffect(()=>{
        // setCounter(counter +1)
        // count.current=count.current +1;
        count.current.focus();
    },[])
    return (
        <div>
            <input type="text"  value={inputdat} ref={count}  onChange={(e)=>{
               setCounter(counter +1) 
               setinputData(e.target.value)
            }}/>
            <h1>Render counter{count.current}</h1>
            <h1>state counter{counter}</h1>
        </div>
    );
};

export default Ref;