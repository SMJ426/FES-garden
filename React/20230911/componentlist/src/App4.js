
import Homepage from './Components/Homepage';
import Login from './Components/Login'
import React, { useState } from 'react'

export default function App4() {
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);

    return (
        login ? <Homepage /> : <Login infoUser = {user}  setLogin = {setLogin}/>
    )
}
