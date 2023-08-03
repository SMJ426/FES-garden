// 1. array에 여러가지 형태
let arr1 = []

let arr2 = [1, 2, 3]

let arr3 = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]
arr3[0] // [1, 2, 3]
arr3[1] // [4, 5, 6]
arr3[2] // [7, 8, 9]
arr3[1][2] // 6

let arr6 = ['leehojun', 10, 180] // 이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하진 않습니다.
arr6[0] // 'leehojun'
arr6[0][3] // 'h'

// 2. array에 길이 출력
let arr4 = [1, 2, 3]
arr4.length // 3
arr4.length = 100
arr4 // [1, 2, 3, empty × 97]
arr4[10] = null
arr4 // [1, 2, 3, empty × 7, null, empty × 89]

let arr5 = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]
arr5.length // 3
arr5.flat().lengthx