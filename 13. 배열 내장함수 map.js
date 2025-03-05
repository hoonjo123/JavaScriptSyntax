let arr = [1,2,3,4,5];

let newArray = [];

for(let i = 0; i<arr.length; i++){
    newArray.push(arr[i] * 10);
}

console.log(newArray); //[ 10, 20, 30, 40, 50 ]

//배열안에 모든 원소를 변환할 때 유용하게 사용되는 메서드
//전달한 콜백함수를 호출한 결과를 모아서 새로운 배열로 반환

let newArray1 = arr.map((elm) => {
    return elm * 10;
})

console.log(newArray1); //[ 10, 20, 30, 40, 50 ]

let newArray2 = [1, 2, 3, 4, 5];
let newArray3 = newArray2.map((elm1) => {
    return elm1;
})
console.log(newArray3);

//forEach와 마찬가지로 세가지의 매개변수를 전달할 수 있다.
//currentValue, index, array 순서대로

let colors = ["green","blue","purple"];
console.log(colors[2]); //purple
//배열의 길이가 매우 길다면? 
console.log(colors[colors.length-1]); 

//at
console.log(colors.at(1)); //blue
console.log(colors.at(2)); //purple
console.log(colors.at(-1)); //purple 맨 마지막 요소

//includes : 배열의 요소 중 특정 값이 존재하는지를 쉽게 확인할 수 있는 메서드
console.log(colors.includes("blue")); //true
console.log(colors.includes("red")); //false

console.log(colors.includes("blue",2)); //2번재 값부터 blue라는 값이 있는가 //false
console.log(colors.includes("red",1)); //false


//indexOf : 배열의 요소 중 특정 값이 몇번째 인덱스에 위치하는지 확인
console.log(colors.indexOf("blue")); //1
console.log(colors.indexOf("red")); //-1 배열에 존재하지 않는 값은 -1을 반환
console.log(colors.indexOf("blue",2)); //2번째 인덱스부터 blue가 있는지 확인 // -1

//객체의 형태로 되어있을때, purple이 몇번째인지 확인하고 싶을때는
//indexOf가 아닌 findIndex를 사용해야 한다.
let colors1 = [
    {id:1, color: "red"},
    {id:2, color: "blue"},
    {id:3, color: "purple"}
];

let idx = colors1.findIndex((elm) => 
    elm.color === "purple");
console.log(idx); //2

colors1.findIndex((elm, idx, array)=> console.log(`${idx}번째 값은 id: ${elm}, color: ${elm.color}`));
colors1.findIndex((elm,idx,array) => console.log(array));
// 0번째 값은 id: [object Object], color: red
// 1번째 값은 id: [object Object], color: blue
// 2번째 값은 id: [object Object], color: purple
// [
//   { id: 1, color: 'red' },
//   { id: 2, color: 'blue' },
//   { id: 3, color: 'purple' }
// ]
// [
//   { id: 1, color: 'red' },
//   { id: 2, color: 'blue' },
//   { id: 3, color: 'purple' }
// ]
// [
//   { id: 1, color: 'red' },
//   { id: 2, color: 'blue' },
//   { id: 3, color: 'purple' }
// ]

//find내장함수 : 찾아낸 값 그 자체를 반환하는 함수

let idx1 = colors1.find((elm) => elm.color === "purple");
console.log(idx1); //{ id: 3, color: 'purple' }

//filter : 조건을 만족하는 모든 값들을 새로운 배열에 담아서 반환하는 내장함수
let idx2 = colors1.filter((elm,idx,array) => elm.id > 1);
console.log(idx2); //[ { id: 2, color: 'blue' }, { id: 3, color: 'purple' } ]

//slice : 배열의 특정값들만 따로 추출해서 새로운 배열을 생성하는 함수
let idx3 = colors1.slice(1,2);
//slice(begin,end) begin부터 end보다 1작은 인덱스의 요소까지의 값들을 추출
console.log(idx3); //[ { id: 2, color: 'blue' } ]


//정리
//at: 배열의 가장 마지막 요소에 쉽게 접근할 수 있게 해주는 메서드 .at(-1)
//includes: 배열의 요소 중 특정 값이 존재하는지를 쉽게 확인할 수 있는 메서드
//indexOf: 배열의 요소 중 특정 값이 몇 번째 인덱스에 위치하는지 확인
//findIndex: 배열의 요소가 객체로 이루어져 있는 경우 특정 값이 몇 번째 인덱스에 위치하는지 확인
//find: 찾아낸 값 그 자체를 반환하는 함수