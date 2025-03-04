//concat : 두개의 배열을 이어붙일 수 있다.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

//join : 배열의 모든 요소를 문자열로 반환해줌
let arr4 = [1,2,3,4,5];
console.log(arr4.join()); //1,2,3,4,5
console.log(arr4.join(" ")); //1 2 3 4 5
console.log(arr4.join("")); //12345

//sort : 배열을 오름차순으로 정렬
let colors = ["red", "blue", "purple"];
colors.sort();
console.log(colors); //[ 'blue', 'purple', 'red' ] 알파벳 순서대로 정렬

//reverse : 배열을 역순으로 정렬
colors.reverse();
console.log(colors); //[ 'red', 'purple', 'blue' ]

//compare함수
// a: 배열의 다음요소
// b: 배열의 이전요소

// 0 보다 작은값(-1): a가 b보다 앞에 있어야함
// 0보다 큰값(1): b가 a보다 앞에 있어야함
// 0: 순서변경 X
const compare = (a,b) => {
    if(a>b) return -1; 
    else if (a<b) return 1;
    else return 0;
};

let numbers = [4,2,5,1,3];
numbers.sort(compare);
console.log(numbers); //[ 5, 4, 3, 2, 1 ]

//사실상 숫자는 그냥 a-b로 해도 된다.

const compare1 = (a, b)=>{
    return a-b;
}
numbers.sort(compare1);
console.log(numbers); //[ 1, 2, 3, 4, 5 ]

//큰순서로 정렬해보자.
const compare2 = (a,b) => {
    return b-a;
}
numbers.sort(compare2);
console.log(numbers); //[ 5, 4, 3, 2, 1 ]

