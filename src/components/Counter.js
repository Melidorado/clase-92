import React, { useState } from 'react';
import './Counter.scss';

const Counter = ({reset}) => {
  const [clicks, setQuantityOfClicks] = useState(0)
  const resetToCero = () => {
    reset && setQuantityOfClicks(0)
  }
 
  const handleClickMinus = () => {
    setQuantityOfClicks(clicks - 1)
  }

  const handleClickPlus = () => {
    setQuantityOfClicks(clicks + 1)
  }
  
  return (
    <>
      <button onClick={handleClickMinus}>-</button>
      <span>{reset ?0 :clicks}</span>
      <button onClick={handleClickPlus}>+</button>
    </>
  );
}

export default Counter;