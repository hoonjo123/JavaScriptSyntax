/* 원시타입과 비원시타입 */
/* 
원시타입: 숫자, bigint, 문자, boolean, null, undefined, symbol
비원시타입: 객체 
*/

// 숫자형
let number = 25;
number = 10.00123;
number = Infinity;
number = NaN;

let number1 = 10;
console.log(number1/0); //Infinity;

let number2 = 10;
console.log("자바스크립트"/number2); //NaN, Not a Number 숫자가 아니다.

// bigint타입형
// 자주사용되지 않고 지원되지 않는 브라우저도 많음
let big1 = 892837498723987n;
let bit2 = BigInt(239423042394);

//문자열
let name1 = "hoon";
let name2 = 'hoon';
let name3 = `hoon`;
// 백틱의 경우 문자열안에 특정변수에 저장된 값을 넣을 수 있다
let name4 = "hoon";
let intro = `제 이름은 ${name4} 입니다.`
console.log(intro); //제 이름은 hoon 입니다. => 템플릿 리터럴


//불린
let isClicked = false;
let isOpen = true;

if (isClicked){
    console.log("클릭o");
}else{
    console.log("클릭x");
}


//null형
// let name = null; => null이 출력
// let name;
// console.log(name); 아무것도 할당하지 않고 출력하면 undefined;
// undefined은 변수에 값이 할당되지 않은 상태!!!


//형변환
// 묵시적형변환, 명시적 형변환

//묵시적 형변환
let num1 = "15";
let num2 = 5;
console.log(num1/num2); //3

//명시적 형변환
let num3 = "15";
let num4 = 5;
console.log(num3+num4); //155 => paseInt함수로 num3를 숫자형으로 변환하게 되면 20의 값을 
//얻을 수 있다.

console.log(parseInt(num3)+num4); //20