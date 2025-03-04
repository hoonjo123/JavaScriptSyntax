//클라이언트와 서버의 통신과정을 이해하고, 서버에서 클라이언트로 데이터를 전송하는 방법을 알아보자.

const response = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => console.log(response))
  .catch((error) => {
    console.error(error);
  });

const getData = async () => {
  try {
    const res = await fetch('https://777.typicode.com/posts');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    //TypeError: fetch failed
    console.error(err);
  }
};

getData();
