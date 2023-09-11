import React from 'react'

export default function MenuListItem(props) {
    return (
        <li>
            <button>기분이 : {props.mood}</button>
        </li>
    )
}
