import React from 'react'
import DisplayMood from './components_practice/DisplayMood/DisplayMood'
import MenuList from './components_practice/MenuList/MenuList'


export default function App_practice() {
    return (
        <div>
            <h1>오늘의 기분을 선택해주세요🐼</h1>
            <div>
                <MenuList />
                <DisplayMood />
            </div>
        </div>
    )
}
