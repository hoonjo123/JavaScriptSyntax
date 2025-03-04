// 산술연산자

let num1 = 10;
let num2 = 5;

console.log(num1+num2); //+,-,*,/

console.log(num1%num2); //나머지 반환 , 0

let num = 10;
console.log(num++); //후위연산 10
console.log(num); //현재값 11
console.log(++num); // 전위연산 12

// 대입연산자
let num3 = 20;
num3 = num3 + 5; //num3 += 5 복합 대입 연산자 => +=, ==, *=, /=
console.log(num3);

// 논리연산자
let isOpen = false;
let isClicked = true;

console.log(!isOpen); //true , !를 이용해 not을 표현
//or 은 || , and는 &&

//비교연산자 ===, ==
// === 는 자료형까지도 확인, ==는 값만 일치하면 true반환
let num5 = 10;
let num6 = "10";
console.log(num5 === num6); //false

//연결연산자
let a = "안녕";
let b = "자바스크립트";
console.log(a+b); //안녕자바스크립트

//널병합연산자
let undefinedNum;
undefinedNum = undefinedNum ?? 20; //20대입
console.log(undefinedNum);

let undefinedNum1 = 100;
undefinedNum1 = undefinedNum1 ?? 20; //20이 나오는게 아니라 100이 그대로 출력됨.
console.log(undefinedNum); // 즉, null이거나 undefined의 경우 대입한 값이 출력되지만 그 외에는
//기존 값 그대로 출력


//삼항연산자 => A ? B : C 의 형태, A가 참일경우 B, 거짓일경우 C를 실행
let samhang = 100;
console.log(samhang % 2 === 0 ? "짝수" : "홀수"); //짝수




