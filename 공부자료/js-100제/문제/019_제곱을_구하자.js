// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
const num = prompt('공백으로 구분해서 두 숫자를 입력하시오').split(' ');
console.log(parseInt(num[0], 10)**parseInt(num[1], 10));

console.log(Math.pow(parseInt(num[0],10), parseInt(num[1], 10)));