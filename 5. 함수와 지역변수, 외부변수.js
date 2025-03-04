/* 함수란?
같은 동작을 하는 중복된 코드가 여기저기에 존재할 때,
이들을 하나로 묶어 하나의 명령으로 실행할 수 있게 해주는 기능 */

function add(a, b) { //매개변수를 통해 전달받기
    console.log(a + b);
}

add(10, 20); //30, 함수호출 후 인수를 넘겨주기

//함수 실행 결과값을 이용해 또 다른 작업을 해야 할 경우 함수의 내부에 return문을 작성

function add1(a, b) {
    return a + b;
    console.log("함수 호출"); //실행되지 않는 이유는 return 아래에 적혔기 때문
}

console.log(`두 숫자를 더한 결과는 ${add1(10, 20)} 입니다.`)

//얼리 리턴 패턴 = if 와 else if문을 작성하지 않고 특정 조건을 만족하면 바로 return
function func(num) {
    if (num === 0) 
        return "num의 값이 0입니다."
    if (num < 0) 
        return "num의 값이 0보다 작습니다"
    if (num >= 10) 
        return "num의 값이 10보다 크거나 같습니다."
    return "num의 값이 0보다 크고 10보다 작습니다."
}

console.log(func(15)); //num의 값이 10보다 크거나 같습니다.
//코드의 구조가 굉장히 단순해짐 즉시 실행 함수 == IIFE함수
(function () {
    console.log("자바스크립트") //자바스크립트
})();


//지역변수 = 내부에서만 유효한 변수
function add2(a, b){
    let sum = a + b;
    return sum;
}

add2(10, 20);

console.log(sum); //add is not defined


//외부변수(전역변수) = 함수의 외부에서 선언된 변수 (외부에서 내부로 접근 가능)

let sum = 0;
function add ( a, b){
    sum = a + b;
}

add(10, 20);
console.log(sum); //30이 출력됨.

