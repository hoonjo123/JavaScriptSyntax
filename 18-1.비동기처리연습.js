// 프로미스를 사용해서 초기값 value를 받아오고 순차적으로 3을 더하고 5를 빼고 10을 더해서 최종값을 반환하도록 코드 짜기
const addNumber = (value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(value + 3);
      }, 2000);
    } catch (err) {
      return reject(err);
    }
  });
};

const addNumber2 = (value) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(value - 5);
      }, 2000);
    } catch (err) {
      return reject(err);
    }
  });
};

const addNumber3 = (value) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(value + 10);
      }, 2000);
    } catch (err) {
      return reject(err);
    }
  });
};

addNumber(10)
  .then((res) => {
    console.log(res);
    return addNumber2(res);
  })
  .then((res) => {
    console.log(res);
    return addNumber3(res);
  })
  .then((finalResult) => {
    console.log(`최종 결과: ${finalResult}`);
  })
  .catch((err) => {
    console.error(err);
  });

//Q2. 최초 5라는 값에 3을 곱하고 4를 나눈 나머지의 값에 100을 더하는 프로미스 체이닝을 구현해보세요.

const multiply = (value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(value * 3);
      }, 2000);
    } catch (e) {
      return reject(e);
    }
  });
};

const multiply2 = (value) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(value % 4);
      }, 2000);
    } catch (e) {
      return reject(e);
    }
  })
};

const multiply3 = (value) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(value + 100);
      }, 2000);
    } catch (e) {
      return reject(e);
    }
  })
};

multiply(5).then((resA) => {
  console.log(`${resA}`);
  return multiply2(resA);
}).then((resB) => {
  console.log(`${resB}`);
  return multiply3(resB);
}).then((finalResult) => {
  console.log(`최종 결과: ${finalResult}`);
}).catch((err) => {
  console.error(err);
});
