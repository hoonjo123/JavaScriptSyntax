/* 구조 분해 할당이란?
배열이나 객체의 요소 및 프로퍼티들을 분해해, 그 값들을
각각의 변수에 할당하는 JS의 표현식 */

let colors = ["red", "blue", "purple"];
/* let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2]; */
let [c1, c2, c3] = colors;

console.log(c1); //red
console.log(c2); //blue
console.log(c3); //purple


//선언 분리 할당
let c4, c5, c6;
[c4, c5, c6] = ["red", "blue", "purple"];
console.log(c4); //red
console.log(c5); //blue
console.log(c6); //purple

let c7 ,c8;
[c7, c8] = ["red", "blue", "purple"];
console.log(c7); //red
console.log(c8); //blue

//배열의 길이보다 더 많은 변수 선언
let c9, c10, c11, c12;
[c9, c10, c11, c12] = ["red", "blue", "purple"];
console.log(c9); //red
console.log(c10); //blue
console.log(c11); //purple
console.log(c12); //undefined

    //undefined가 나올때는 바로 할당해줄 수 있다. (기본값 할당)
    [c9, c10, c11, c12 = "black"] = ["red", "blue", "purple"];
    console.log(c9); //red
    console.log(c10); //blue
    console.log(c11); //purple
    console.log(c12); //black

    //두 변수의 값을 바꾸어보기
    let a = 10;
    let b = 20;
    [a,b] = [b,a];
    console.log(a); //20
    console.log(b); //10

//객체의 구조 분해 할당
let colors1 = {
    c1: "red",
    c2: "blue",
    c3: "purple",
}

let co1 = colors1.c1;
let co2 = colors1.c2;
let co3 = colors1.c3;

console.log(c1); //red
console.log(c2); //blue
console.log(c3); //purple


let {cor1, cor2, cor3} = colors1;


console.log(cor1);
console.log(cor2);
console.log(cor3);

//클론이라는 방식을 통해 할당해줄수도 있다.
let {c1: c13, c2: c14, c3: c15} = colors1;
console.log(c13); //red
console.log(c14); //blue
console.log(c15); //purple