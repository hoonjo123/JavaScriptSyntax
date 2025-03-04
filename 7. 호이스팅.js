/* 아직 선언되지 않은 함수나 변수들을 해당 스코프의 맨 위로 끌어올려 사용하는 작동방식 */

// 함수호이스팅

print();

function print(){
    console.log("hello world"); // helloworld 정상 출력
}


//변수호이스팅

console.log(num); //undefined;
var num = 10;


//var가 아닌 let과 const로 선언 => 모두 undefined로 출력
//하지만 브라우저에서 실행하게 되면 let과 const로 선언한 결과 에러가 발생함.
//이걸 이해하기 위해 TDZ ( Temporal Dead Zone 에 대한 이해가 필요함 )

//TDZ : 일시적인 사각지대
//var의 경우 변수 선언 완료시 메모리 공간 할당
//let 과 const의 경우 num1,  num2 변수가 10이라는 값으로 추기화 완료 후 메모리 공간 할당
