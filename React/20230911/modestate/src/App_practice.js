import {useState} from 'react'
import DisplayMood from './components_practice/DisplayMood/DisplayMood'
import MenuList from './components_practice/MenuList/MenuList'


export default function App_practice() {

    const [currentMood, setCurrentMood] = useState('');
    return (
        <div>
            <h1>오늘의 기분을 선택해주세요🐼</h1>
            <div>
                <MenuList setCurrentMood = {setCurrentMood}/>
                <DisplayMood mood = {currentMood}/>
            </div>
        </div>
    )
}
