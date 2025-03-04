const idElement = document.getElementById('id');
const pwdElement = document.getElementById('pwd');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  localStorage.setItem('id', idElement.value);
  localStorage.setItem('pwd', pwdElement.value);
  console.log(idElement.value);
  console.log(pwdElement.value);

  let userinfo = {
    id: idElement.value,
    pwd: pwdElement.value
  }
  localStorage.setItem('userinfo', JSON.stringify(userinfo));
});