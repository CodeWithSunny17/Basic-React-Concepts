import React, { useState } from 'react';
import './Plusminus.css'

export default function Plusminus() {
    const [number, setNumber] = useState(0);

    const handlePlusClick = ()=>{
        setNumber(number+1)
    }

    const handleMiusClick = ()=>{
        setNumber(number-1)
    }


  return (
    <div>
        <h1>{number}</h1>
        <button onClick = {handlePlusClick}>+</button>
        <button onClick = {handleMiusClick}>-</button>
    </div>
  )
}
