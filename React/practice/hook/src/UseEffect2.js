import React, { useEffect, useState } from 'react'
// state가 변할때마다 다른 효과를 주는 useEffect를 사용하여 짝수와 홀수를 alert하는 기능을 만들기


function Counter(){

    const [count, setCount] = useState(0);
    const [checkRender, setCheckRender] = useState(false)
    const handleClickUp = (e)=>{
        setCount(count + 1)
    }

    useEffect(()=>{
        if(checkRender){
            if(count%2){
                alert('홀수입니다.')
            }
            else{ 
                alert('짝수입니다.')
            }
        }
            setCheckRender(true);
    }, [count])
    return(
        <>
            <div>{count}</div>
            <button onClick={handleClickUp}>UP!</button>
        </>
    )
}

export default function UseEffect2() {
  return (
    <div>
        <Counter />
    </div>
  )
}
