let arr = [1,2,3,4,5];

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

//forEach를 통한 배열 접근
//배열에서 for문을 대체해 사용되며, 콜백 함수의 여러가지 매개변수들을 통해
// 더 다양한 기능을 할 수 있는 유용한 배열 메서드
arr.forEach((elm) => {
    console.log(elm);
});

arr.forEach((elm,idx) => {
    console.log(`${idx}번째 요소는 ${elm}입니다.`);
});

arr.forEach((elm,idx, array) => {
    console.log(`${idx}번째 요소는 ${elm}입니다.`);
    console.log(array);
});


