//프로미스 객체 : 콜백지옥 해결

//콜백지옥 : 콜백함수를 연속해서 사용할 때 발생하는 문제 , 꺽쇠모양의 형태를 띄고 있다.

const workA = (value, callback) => {
  setTimeout(() => {
    callback(value);
  }, 5000); //5초
};
const workB = (value, callback) => {
  setTimeout(() => {
    callback(value);
  }, 3000); //3초
};

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value);
  }, 10000); //10초
};

const workD = (value, callback) => {
  callback(value);
};

workA("workA", (res) => {
  console.log(res);
});
workB("workB", (res) => {
  console.log(res);
});
workC("workC", (res) => {
  console.log(res);
});
workD("workD", (res) => {
  console.log(res);
});

//workD -> workB -> workA -> workC 순으로 출력되는걸 확인할 수 있다.

//그렇다면 이번에는 workA에서 매개변수로 받은 값에 5를 더하고 그 결과값을
//workB에서 전달받아 다시 3을 빼고 다시 그 결과값에 10을 더하는 workC함수로 코드를 변경해보자
const workA1 = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 5000); //5초
};
const workB2 = (value, callback) => {
  setTimeout(() => {
    callback(value -3);
  }, 3000); //3초
};

const workC3 = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000); //10초
};

const workD4 = (value, callback) => {
  callback(value);
};


workA1(10, (resA) => {
    console.log(`1. ${resA}`);
    workB2(resA, (resB) => {
        console.log(`2. ${resB}`);
        workC3(resB, (resC) => {
            console.log(`3. ${resC}`);
        });
    })
});

//가독성이 매우 안좋음

//프로미스 객체를 사용하면 이런 콜백지옥을 해결할 수 있다.
//인수로 executor라는 실행함수를 전달한다.
//resolve와 reject는 자바스크립트에서 자체적으로 제공하는 콜백함수임
//비동기처리가 성공하면 resolve, 실패하면 reject를 호출
const executor = (resolve, reject) => {
    setTimeout(() => {
        console.log("3초만 기다리셈")
    }, 3000);
};

const promise = new Promise(executor);
//객체이기때문에 프로퍼티를 가지고 있다.
//state:pending(대기), result: undefined => resolve(value) => state:fulfilled(이행), result: value
//state:pending(대기), result: undefined => reject(error) => state:rejected(거부), result: error


//reseolve와 reject의 사용

const executor1 = (resolve, reject) => {
    setTimeout(() => {
        resolve("성공");
    }, 3000);
};

const promise1 = new Promise(executor1);
promise1.then((res) => {
    console.log(res);
});


const executor2 = (resolve, reject) => {
    setTimeout(() => {
        reject("실패");
    }, 3000);
};

const promise2 = new Promise(executor2);
promise2.then((res) => { //then 메서드는 작업이 성공했을때만 사용됨
    console.log(res);
}).catch((err) => { //reject의 경우 catch메서드를 사용해야함.
    console.log(err);
});


//그럼 아까 콜백지옥을 promise를 통해서 구현해보쟝

const workA3 = (value) => {
    promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 5000);
    });
    return promise3;
}

const workB3 = (value) => {
    promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value - 3);
        }, 3000);
    });
    return promise3;
} 

const workC4 = (value) => {
    promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 10);
        }, 10000);
    });
    return promise3;
}

//프로미스체이닝
workA3(10).then((resA) => {
    console.log(`1. ${resA}`);
    return workB3(resA);
}).then((resB) => {
    console.log(`2. ${resB}`);
    return workC4(resB);
}).then((resC) => {
    console.log(`3. ${resC}`);
});
// 1. 15 => 2. 12 => 3. 22

