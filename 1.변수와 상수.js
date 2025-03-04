/* 변수란
이름을 가진 저장소
 */

let color = "skyblue";
console.log(color);

color = "yellow";

/* 변수의 이름은 $와 _를 제외한 기호는 사용 불가
변수명의 맨 앞은 숫자 사용 불가
예약어 사용 불가 ex) let, class 사용 불가, 예약어 참조
 */

/* 변수는 카멜케이스로 작성한다. */
let isCatOrDog;
/* 
자바스크립트 변수는 typeof를 통해 타입을 알 수 있다.
별도로 선언하지 않는다. 
동적타입 변수
*/

let nowType = "안녕하세요";
console.log(typeof nowType); //String

/* 상수란 변화하지 않는 변수 */
// let이 아닌 const를 통해 선언한다.
// const color1 ="yellow";
// color1 = "blue";
// console.log(color1);
// TypeError: Assignment to constant variable.

