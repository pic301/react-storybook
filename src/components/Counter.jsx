import React,{useState} from 'react';


const Counter = () => {
  const [number,setNumber] = useState(0)

  const handlePlusCount = () =>{
    setNumber(number+1)
  }
  const handleMinusCount = () =>{
    setNumber(number-1)
  }
  return (
    <div>
      {number}
      <button onClick={handlePlusCount}>+</button>
      <button onClick={handleMinusCount}>-</button>
    </div>
  );
};

export default Counter;