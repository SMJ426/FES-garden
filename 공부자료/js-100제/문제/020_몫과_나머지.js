// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.


// 입출력

// 입력 : 10 2
// 출력 : 5 0


// 내 풀이
const num = prompt('두 숫자를 입력하시오.').split(' ');

let rest = Math.floor(parseInt(num[0], 10) / parseInt(num[1],10));
let share = parseInt(num[0], 10) % parseInt(num[1],10);

const result = [rest, share].join(' ');
console.log(result);


// 답지
const n = prompt('수를 입력하세요.').split(' ');

const result2 = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result2, left);