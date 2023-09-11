import React from 'react'

export default function MenuListItem(props) {
    const btnClick = () => {
        props.setCurrentMood(props.mood);
    }
    return (
        <li>
            <button onClick={btnClick} className='btn-item'>기분이 : {props.mood}</button>
        </li>
    )
}
