/* 지금까지의 함수 선언 방식
function 함수이름(){
    기능들...
} */

//함수표현식
let print = function(){
    console.log("hello wolrd");
}

print();

//함수선언식은 호이스팅에 영향을 받지만, 함수표현식은 호이스팅의 영향을 받지 않는다.
//예를들어, 함수 선언식의 경우 hello world가 정상 출력됨.
print();
function print(){
    console.log("hello world");
}
//반면, 함수표현식의 경우 print is not a function과 같은 에러 발생 => 
    //Cannot access 'print' before initialization

print();
let print = function(){
    console.log("hello world");
}



//함수 표현식을 화살표 함수를 통해서 더욱 간결하게 표현해보자.
const print = () => {
    console.log("helloworld!")
}
print();



//콜백함수 : 다른 함수에 매개변수로 넘겨준 함수
function start(name, callback){
    console.log(`안녕하세요 ${name} 입니다.`);
    callback();
}

function finish(){
    console.log("감사합니다.");
}

start("hoon", finish); //안녕하세요 hoon 입니다.
// 감사합니다.
// => 콜백함수는 이렇게 특정 함수를 갑처럼 함수의 매개변수로 전달해 유연하고 다양한
// 동작을 할 수 있게 해줌.

