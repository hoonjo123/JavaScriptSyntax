//promise객체를 좀 더 쉽고 직관적으로 작성 가능한 async와 await

//먼저 promise객체를 사용해서 2초후에 대기가 출력되도록 해보자.

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const start = () => {
    delay(2000).then(() => {
        console.log("대기");
    });
};

start();


//async와 await를 사용하면 코드가 더 간결해진다.
// async는 함수 앞에 선언하고, 내부에서 await를 사용하면 된다.

const delay2 = (ms) => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const start2 = async () => {
    try {
        await delay2(2000);
        console.log("대기");
    } catch (err) {
        console.error(err);
    }
};