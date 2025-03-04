/* 객체가 한번에 여러 개의 데이터 값들을 저장할 수 있는 자료형이였다면,
배열은 순서가 있는 요소들의 집합, 여러개의 항목들이 모여 있는 리스트이다. */

//생성자를 이용한 객체 생성
let arr = new Array();
console.log(arr); //[]

let arr1 = new Array(1,2,3);
let arr2 = new Array(3);
console.log(arr1); //[ 1, 2, 3 ]
console.log(arr2); //[ <3 empty items> ]

//배열 리터럴을 사용한 배열 생성
let arr3 = [];
console.log(arr3); //[]

let arr4 = [1,2,3]; //[ 1, 2, 3 ]
let arr5 = [3]; //[ 3 ]
console.log(arr4);
console.log(arr5);

//객체와 마찬가지로 다양한 자료형을 배열의 요소에 넣을 수 있다.

//배열의 접근
let array = [1, "hello", null];
console.log(array[0]) //1
console.log(array[1]) //hello
console.log(array[2]) //null

//배열 추가 push
array.push(4);
console.log(array);

array.unshift(0); //배열의 젤 앞쪽에 추가
console.log(array); //[ 0, 1, 'hello', null, 4 ]

//배열 수정
array[0] = 2;
array[2] = undefined;
console.log(array); //[ 2, 1, undefined, null, 4 ]

//배열은 객체로 분류되는 자료형으로 const로 선언된 배열의 요소또한 수정이 가능하다.

// 배열 삭제
array.pop(); // 가장 마지막 요소 삭제
array.shift(); //가장 앞에 있는 요소 삭제

// 배열의 길이
console.log(array.length);



