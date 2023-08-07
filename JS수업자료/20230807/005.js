// 같은 코드 1
[1, 2, 3, 4].map(v => 'hello' + v)

// 같은 코드 2
function 함수(v) {
    return 'hello' + v
}
[1, 2, 3, 4].map(함수)

// 같은 코드 3
[1, 2, 3, 4].map(function (v) {
    return 'hello' + v
})

// 같은 코드 4
[1, 2, 3, 4].map((v) => {
    return 'hello' + v
})