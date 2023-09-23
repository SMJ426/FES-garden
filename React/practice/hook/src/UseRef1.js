import React, { useRef, useState, useEffect } from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    let countThree = useRef(0)
    let countFour = 0
    console.log(countThree)

    const handleCountUp =(e)=>{
        setCount(count + 1)
        console.log(count)
    }

    const handleCountUpTwo =(e)=>{
        setCountTwo(countTwo + 1)
        console.log(countTwo)
    }

    const handleCountUpThree = (e) => {
        countThree.current = countThree.current + 1
        console.log(countThree.current)
      }
      const handleCountUpFour = (e) => {
        countFour = countFour + 1
        console.log(countFour)
      }
    
      useEffect(() => {
        console.log('count가 감시되고 있습니다.')
        console.log(`감시된 변수 : ${count}`)
      }, [count])

	return (
		<>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
            <div>{countThree.current}</div>
            <button onClick={handleCountUpThree}>up!</button>
            <div>{countFour}</div>
            <button onClick={handleCountUpFour}>up!</button>
		</>
	)
}

export default function UseRef1() {
	return (
		<div>
			<Counter />
		</div>
	)
}
