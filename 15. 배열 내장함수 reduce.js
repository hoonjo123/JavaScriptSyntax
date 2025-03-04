// reduce전에 forEach를 통해 배열 요소들의 합을 구해보도록 하자.

let arr = [1,2,3,4,5];
let sum = 0;
arr.forEach((elm) => {
    sum += elm;
});
console.log(sum); //15

//reduce 에는 콜백함수와 initial value, 초기값이 들어간다.
//acc (accumulator)은 콜백 함수의 반환 값을 누적하는 매개변수
//cur (currentValue)는 현재 처리할 요소의 값
//idx (index)는 현재 처리할 배열요소의 인덱스
let numbers = [1,100,25,50];
let sum1 = numbers.reduce((acc,cur,idx)=>{
    console.log(acc, cur, idx);
    return acc + cur;
},0);
console.log(sum1); //176

//과정을 좀 더 상세하게 분석해보면
/* 0 1 0
1 100 1
101 25 2
126 50 3 */
//위와같이 나오는걸 확인할 수 있다.
// 즉, 초기값 0부터 0번째 인덱스의 값인 1을 더해서 다음 acc로 넘겨준다.
// 1과 1번째 인덱스의 값인 100을 더해서 넘겨주고 101... 과정을 반복한다.
// 최종적으로 126과 3번째 인덱스인 50을 더해서 176의 값이 나오는거다.

//만약, 초기값이 10 이라면 186이 나올 것이다.




//isArray : 배열인지 아닌지 확인하는 메서드
let a = Array.isArray([1,2,3]); //true
let b = Array.isArray({name: 'hoon'}); //false
let c = Array.isArray('hello'); //false
let d = Array.isArray(undefined); //false

console.log(a,b,c,d);