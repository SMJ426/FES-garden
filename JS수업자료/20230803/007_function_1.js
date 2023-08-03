function 더하기(x, y){
  return x + y;
}
function 빼기(x, y){
  return x - y;
}
function 곱하기(x, y){
  return x * y;
}
function 나누기(x, y){
  return x / y;
}

console.log(더하기 (5, 2))
console.log(빼기 (15, 2))
console.log(곱하기 (5, 2))
console.log(나누기 (5, 2))

// 문제2: '10,000,000,000'와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어주세요
function only(str) {
  return parseInt(str.replaceAll(',',''))
}

// 문제3: 입력된 문자열을 console로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
// 입력: world
// 출력: ['w','o', 'r', 'l', 'd']

let input = 'world'
function printAndSplit(str){
  console.log
}
console.log(input)


// 문제 4
// 4.1번째 풀이
function addAndMultiply(x,y){
  sum = x + y
  sum2 = sum * sum
  return sum2
}
addAnd(1,2)
console.log(sum2)

// 4.2번째 풀이
function add(x,y){
  return x + y
}
function addAndMultiply(x,y){
  let sum = add(x + y) * add(x + y)
  return sum
}
addAndMultiply(1,2)

// 4.3번째 풀이
function addAndMultiply(x,y){
  // 메모리 효율을 위해 함수를 내부에서 만들어서 사용
  function add(x, y){
    return x+ y
  }
  let sum = add(x, y) * add(x, y)
  return sum
}


// 문제5: 
//
function quadraticEquation (x){
  result = x**2 + 4*x - 12
  return result
}
quadraticEquation(3)