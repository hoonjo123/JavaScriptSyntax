//yyyy--mm--dd
let nowDate = new Date('2025-03-04');
console.log(nowDate); //2025-03-04T00:00:00.000Z

const week = ['일', '월', '화', '수', '목', '금', '토'];

let nowDate1 = new Date();
let month = nowDate1.getMonth() + 1;
let day = nowDate1.getDay();
let date = nowDate1.getDate();
let year = nowDate1.getFullYear();
console.log(`${month}월 ${date}일 ${week[day]}요일`); //3월 4일 4요일

//4요일...? 이상하게 출력됨
//week[day]로 바꿔서 출력하면 올바르게 출력이 됨.

let hours = nowDate1.getHours(); //0-24
let minutes = nowDate1.getMinutes(); //0-59

console.log(`${hours}시 ${minutes}분`); //15시 53분
