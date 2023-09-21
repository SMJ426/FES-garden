import React, { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    const handleClickUp = (e)=>{
        setCount(count+1)
    }

    return(
        <>
            <div>{count}</div>
            <button onClick={handleClickUp}>UP!</button>
        </>
    )
}



export default function UseEffect() {
  return (
    <div>
        <Counter />
    </div>
  )
}
