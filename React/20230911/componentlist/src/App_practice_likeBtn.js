import React, { useState } from 'react'

export default function App_practice_likeBtn() {
    const [like, setLike] = useState('');

    function clickFun(){
        if(like === ''){
            setLike('like');
        } else {
            setLike('');
        }
    }

    return (
        <div>
            <button onClick={clickFun}>like</button>
            <span>{like}</span>
        </div>
    )
}
