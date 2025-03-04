// 특정 조건이 성립되었을 때, 그 조건에 해당되는 코드를 싱행하게 하는 문법

// if문, if-else문 , if-else if문, switch/case문

//1. if문

let num = 10;

if(num===10){
    console.log("num의 값은 10입니다.");
}

//2. if-else문
let num1 = 5;
if(num1 === 10){
    console.log("num의 값은 10입니다.")
}else{
    console.log(`num1의 값은 ${num1}입니다.`)
}

//3. if -else if문
let num2 = 5;
if (num2 === 10) {
    console.log("num2의 값은 10입니다.")
} else if (num2 < 10) {
    console.log("num2의 값은 10보다 작습니다.")
} else {
    console.log("num2의 값은 10보다 큽니다.")
}

//4. switch - case문
let fruit = "apple";

switch(fruit){
    case "banana":
        console.log("바나나");
        break;
    case "apple":
        console.log("사과");
        break;
    default:
        console.log("다른 과일");
} //사과 