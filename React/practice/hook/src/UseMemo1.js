import React, { useState } from 'react'


function 부하() {
    let s = 0
    for(let i = 0; i < 1000000000; i++){
        s += i
    }
    return s
}

export default function UseMemo1() {
    const [count, setCount] = useState(0)
    let result = 부하()

    const handleCountUp =(e) =>{
        setCount(count + 1)
        console.log(count)
    }
  return (
    <div>
        <h1>계산 결과 : {result}</h1>
        <div>{count}</div>
        <button onClick={handleCountUp}>UP!</button>
    </div>
  )
}
