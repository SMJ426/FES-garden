import React from 'react'

export default function App() {
  return (
    <Hello name='licat'/>
  );
}

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return num.map((item) => <h1>안녕, {name} {item}호</h1>)
}