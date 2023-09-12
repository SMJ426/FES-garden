import React from 'react'

function Hello(props){
  const name = props.name;
  const num = [1,2,3,4,5,6,7,8,9,10];

  return(
    num.map((item, index)=>{
      return <h2 key={index}>안녕, {name} {item} 호</h2>
    })
  )
}





export default function App() {
  return (
    <Hello name='혜지님'/>
  );
}

