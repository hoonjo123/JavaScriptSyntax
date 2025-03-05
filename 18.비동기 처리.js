//동기란? 하나의 작업이 실행되는 동안은 다른 작업을 동시에 진행하지 않는 방식
// 앞의 작업이 종료된 이후 다음 작업을 진행 할 수 있는 순차적인 방식

const workA = () => {
  //5초
  console.log('workA done');
};

const workB = () => {
  //3초
  console.log('workB done');
};

const workC = () => {
  //10초
  console.log('workC done');
};

workA();
workB();
workC();

//동기적으로 처리할 경우 18초가 걸린다
//순차적으로 처리하는 방식을 블로킹방식 이라고 부르기도 함

//자바스크립트는 싱글스레드 환경에서만 작동하기 때문에 멀티스레드 방식도 적용할수없음.
// => 비동기 작업

// 비동기 처리란: 여러 작업들을 동시에 진행하는 방식 => 논블로킹
// 18초에서 10초로 줄어듬

//비동기처리 대표적인 내장함수 setTimeout

//콜백함수와 딜레이타임
setTimeout(() => {
  console.log('3초만 기다리셈');
}, 3000);
console.log('종료'); //종료가 먼저 출력된걸 확인할 수 있다.
// settimeout함수는 비동기함수이기 때문에 종료가 먼저 출력된다.

//만약 종료가 정말 끝난 후 출력되기를 원한다면 콜백함수에 인수로 넘겨주어야함.
const work = (callback) => {
  console.log('3초만 기다리셈');
  setTimeout(() => {
    console.log('3초 지남');
    callback();
  }, 3000);
};

work(() => {
  console.log('작업이 끝났어요');
});

//그럼 젤 위에 있는 동기적으로 적어둔 workA, workB, workC를 비동기적으로 처리해보자
//그리고 workD를 추가해보자

const workA1 = () =>
  setTimeout(() => {
    console.log('workA1 done');
  }, 5000);

const workB1 = () =>
  setTimeout(() => {
    console.log('workB1 done');
  }, 3000);

const workC1 = () =>
  setTimeout(() => {
    console.log('workC1 done');
  }, 10000);

const workD = () => {
  console.log('workD done');
};

workA1();
workB1();
workC1();
workD();
// workD done -> workB1 done -> workA1 done -> workC1 done
