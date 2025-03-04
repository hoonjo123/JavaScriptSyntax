//spread : 확산, 퍼짐, 전파

//toy객체 선언
const toy = {
    type:"bear",
    price:15000
};

const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
}

const yellowToy = {
    type: "bear",
    price: 15000,
    color: "yellow"
}

//type과 price의 프로퍼티가 동일함을 알 수 있다. 여러번 작성해야하는 번거로운 작업을
//해야함... spread문법을 통해 반복되는 프로퍼티들을 한번에 작성할 수 있다.

const blueToy1 = {
    ...toy,
    color: "blue"
}

const yellowToy1 = {
    ...toy,
    color: "yellow"
}

console.log(blueToy1);
console.log(yellowToy1);

//객체뿐 아니라 배열에서도 사용할 수 있다

const color1 = ["red", "blue", "purple"];
const color2 = ["yellow", "green", "black"];

const rainbow = [...color1,"orange", ...color2];
console.log(rainbow); //[ 'red', 'blue', 'purple', 'orange', 'yellow', 'green', 'black' ]



//rest문법
//나머지 매개변수
//특정부분을 하나의 배열이나 객체로 묶어주는 문법

const redToy = {
    type:'bear',
    price: 15000,
    color: "red"
};

const {type, ...rest} = redToy;

console.log(type); //bear
console.log(rest); //{ price: 15000, color: 'red' }
//rest변수는 객체의 형태로 출력이 되고 객체 안에는 레드토이 객체 프로퍼티 중
//type값을 제외한 나머지 값들이 들어감을 확인할 수 있다.

//rest문법은 꼭 마지막에 적어주자.


//rest문법을 배열에서 사용해보기
const colors = ["red", "blue", "purple", "yellow", "green"];
const [c1,c2, ...rest1] = colors;
console.log(c1); //red
console.log(c2); //blue
console.log(rest1); //[ 'purple', 'yellow', 'green' ]

//rest문법을 함수의 매개변수에서 사용해보기

const print = (a,b,c,d,...rest)=>{
    console.log([a,b,c,d,rest]);
}

print(1,2,3,4,5,6);




//정리

//* spread문법 -> 인수로 많은값을 한번에 넘겨주어야할때 사용됨.
const print1 = (a,b,c,d,e,f)=>{
    console.log(a,b,c,d,e,f);
}

const numbers = [1,2,3,4,5,6];
print1(...numbers); //1 2 3 4 5 6


const print2 = (...rest)=>{
    console.log(rest);
}

const numbers1 = [1,2,3,4,5,6];
print2(...numbers1); //[ 1, 2, 3, 4, 5, 6 ]

// spread문법 : 객체나 배열에서 중복된 부분을 퍼뜨릴 때, 
// 함수를 호출할 때 인수로 전달할 값을 퍼뜨릴 때 사용되고

// rest문법 : 객체나 배열에서 특정 부분을 하나의 객체나 배열로 묶어야 할 때 혹은 구조분해 할당을
// 사용해 혹은 구조분해 할당을 사용해 배열이나 객체의 값을 묶어서 할당할 때, 그리고 함수의
// 매개변수로 많은 값들을 전달받거나 특정매개변수들을 제외한 나머지 매개변수들을 묶어서 사용할 때
// 사용된다.

