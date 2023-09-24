import React, { useState, useRef } from 'react'

export default function UseMemo_example() {
    const inputName = useRef(null)
    const inputId = useRef(null)
    const [userInfo, setUserInfo] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')
  
    function handleInputName(e){
        console.log(e)
        setName(e.target.value)
        console.log('랜더링 - 1')
    }

    function handleInputId(e){
        console.log(e)
        setId(e.target.value)
        console.log('랜더링 - 2')
    }

    function handleSubmit(e){
        e.preventDefault()
        const newInfo = [...userInfo, {name, id}]
        inputName.current.value = ''
        inputId.current.value = ''
        inputName.current.focus()
        setUserInfo(newInfo)
        console.log('랜더링 - 3')
    }

    function getNum(li){
        console.log('랜더링!')
        return li.length
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='이름을 입력하세요' onChange={handleInputName} ref={inputName} />
                <input type='text' placeholder='아이디를 입력하세요' onChange={handleInputId} ref={inputId} />
                <button type='submit'>회원 명부 작성</button>
            </form>
            <ul>
                {
                    userInfo.map((value, index) => {
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 : {value.id}</strong>
                        </li>
                    })
                }
            </ul>
            <span>현재 회원 수 : {getNum(userInfo)}</span>
        </>
    )
}
