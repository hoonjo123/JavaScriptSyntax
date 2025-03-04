// 비 원시 타입인 객체
let person = new Object();
console.log(person); //{}

//객체 리터럴 방식
let person1 = {};
console.log(person1);

//객체의 프로퍼티(속성) key:value => key값을 통해 찾아야함으로 key값은 고유해야함.
//value의 값에는 어떠한 값을 넣어도 상관없음 , undefined.. 숫자형.. 등등
let person2 = {
    name: "hoon",
    age: 30
};

console.log(person2);//{ name: 'hoon', age: 30 }

//프로퍼티 꺼내는법 ( 점표기법과 괄호표기법 )

console.log(person2.name); //hoon
console.log(person2.age); //30

console.log(person2["name"]); //hoon

//객체 프로퍼티 사용법
const getValue = (key) =>{
    console.log(person2[key])
};

getValue("name"); //hoon

//객체 프로퍼티 추가,수정,삭제
person2.phone = "010-123-4567";
person2["height"] = 181;

console.log(person2);

person2.age = 31;

//우리는 객체를let으로 선언했지만 객체의 경우 상수로 선언된 객체의 property값도 변경 가능

//삭제할때에는 delete를 사용
delete person2.phone; //전화번호 삭제



//메서드 : 객체의 값이 함수로 선언되어 있다는 뜻.
const myself = {
    name: "hoon",
    age: "30",
    address: "서울 동대문구",
    job: "dev",
    //메서드를 생성할 때 주의할 점 : 화살표형 함수가 아닌 function으로 선언해야함.
    print: function(){
        console.log(`제 이름은 ${this.name} 입니다.`)
    }
};

myself.print() //제 이름은 hoon 입니다.