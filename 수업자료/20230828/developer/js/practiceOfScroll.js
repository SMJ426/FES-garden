const path = document.querySelector('#path');
const openBtn = document.querySelector('.btn-open');

// path의 전체길이 구하기
const pathLength = path.getTotalLength();

// path의 길이와 공백
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// path의 dash를 어디서 부터 그릴지 시작점을 지정해주기
path.style.strokeDashoffset = pathLength; // 전체 길이로 설정해주면 화면에 보이지 않음 하지만 이제부터 스크롤을 내림에 따라 화면에 생기게 할거임

// 이벤트리스너를 통해 스크롤 이벤트를 발생시킨다.(스크롤 이벤트 함수는 scrollHandler)
window.addEventListener('scroll', scrollHandler);

// scrollHandler함수를 정의한다.
function scrollHandler(){
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤의 위치를 %으로 나타낼건데 0에서 1의 값을 가진다.
  // 전체 스크롤 영역에서 뷰포트의 크기만큼 빼준값이 실제 전체 스크롤의 값이다.
  const scrollPercentage = scrollTop / (scrollHeight-clientHeight);

  const drawLength = pathLength * scrollPercentage;

  // pathLength를 0으로 보내야 점점 그려지는 모습이 보이기 때문에 그렇게 설정해준다.
  path.style.strokeDashoffset = pathLength - drawLength;

  openBtn.style.opacity = scrollPercentage;


  if(scrollPercentage > 0.8){
    openBtn.disabled = false;
  }
  else {
    openBtn.disabled = true;
  }
}