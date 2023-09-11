import React from 'react'

export default function DisplayMood(props) {
    return (
        <div className='container'>
            <h2>{props.mood ? `기분이 : ${props.mood}`: '아직 선택하지 않으셨습니다...' }</h2>
        </div>
    )
}
