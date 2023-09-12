import React from 'react'
import App4 from '../App4'

export default function Homepage({setLogin}) {
    
    const backToLogin = () =>{
        
    }
    
    return (
        <main>
            <h1>홈페이지에 오신것을 환영합니다!</h1>
            <button onClick={()=>setLogin(false)}>로그아웃</button>
        </main>
    )
}