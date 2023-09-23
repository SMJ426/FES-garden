import React, { useState } from 'react'

export default function UseRef2() {
    const [emailValue, setEmailValue] = useState('')
    const [pwValue, setPwValue] = useState('')

    const inputCheck = (e)=>{
        e.preventDefault()
        setEmailValue(document.querySelectorAll('input')[0].value)
        setPwValue(document.querySelectorAll('input')[1].value)
    }
    return (
       <form onSubmit={inputCheck} style={{display: 'flex', flexDirection:'column'}}>
        <label>
            이메일 : <input type='email'></input>
        </label>
        <label>
            비밀번호 : <input type='password'></input>
        </label>

        <button type='submit' style={{width: '100px'}}>
            로그인
        </button>
        <span>입력한 이메일 : {emailValue}</span>
        <span>입력한 비밀번호 : {pwValue}</span>
       </form>
    )
}
