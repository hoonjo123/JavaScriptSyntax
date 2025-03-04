/* //getElementsById 특정요소를 id값을 기준으로 가져온다.
//가장 앞에 있는 id값을 가져온다.
console.log(document.getElementById('date'));

//querySelectorAll 특정요소를 css선택자를 기준으로 가져온다.
console.log(document.querySelector('div.date'));
console.log(document.querySelectorAll('div.date'));

console.log(document.getElementsByClassName('date'));
console.log(document.getElementsByTagName('div')); */

const dateElement = document.getElementById('date'); //date
dateElement.className = 'changed';
console.log(dateElement); //changed

/* outerHTML: '<div class="changed" id="date">2025년 3월 4일</div>';
outerText: '2025년 3월 4일'; */

