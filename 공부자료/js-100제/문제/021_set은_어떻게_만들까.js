// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();


// set이란?
// set이란 중복되지 않는 데이터를 저장하는 데이터 구조이다.
// 그래서 set객체 안에있는 데이터는 중복을 허락하지 않는다.

let setVal = new Set(); // Set 생성
setVal.add(); // 값을 추가하는 메소드
setVal.delete(); // 값을 삭제하는 메소드
setVal.has(); // set안에 특정 값이 있는지 없는지 true, false값으로 반환해준다.


// 답은 3번과 5번이다.
// 4번은 Set안에 알 수 없는 메소드가 들어가 있기 때문에 적절하지 않다.(실제로도 JS에 없는 메소드)

