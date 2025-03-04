// 특정 작업을 반복적으로 수행할 때 사용

for(let i = 1; i<=5; i++){
    console.log(i);
}

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}


arr = [1,2,3,4,5];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

let person = {
    name: 'hoon',
    age: 30,
    height: 181
};

//object.를 사용해 배열로 변경
console.log(Object.keys(person)); //[ 'name', 'age', 'height' ]
console.log(Object.values(person)); //[ 'hoon', 30, 181 ]
console.log(Object.entries(person)); //[ [ 'name', 'hoon' ], [ 'age', 30 ], [ 'height', 181 ] ]

let newArray = Object.keys(person);
for (let i = 0; i<newArray.length; i++){
    let nowKey = newArray[i];
    console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}

/* key: name, value: hoon
key: age, value: 30
key: height, value: 181 */

let newArray1 = Object.values(person);
for( let i = 0; i<newArray1.length; i++){
    console.log(`value: ${newArray1[i]}`)
}

/* value: hoon
value: 30
value: 181
 */

let newArray2 = Object.entries(person);
for(let i = 0; i<newArray2.length; i++){
    console.log(`key: ${newArray2[i][0]}, value: ${newArray2[i][1]}`)
}

/* key: name, value: hoon
key: age, value: 30
key: height, value: 181
 */



//for ... of 문
let forOfArr = [1,2,3,4,5];

for(let i of forOfArr){
    console.log(i);
}

//for in 반복문을 통해 객체에 한번에 접근해보자.
for(let i in person){
    console.log(`i: ${i}, value: ${person[i]} `);
}

/* name
age
height */