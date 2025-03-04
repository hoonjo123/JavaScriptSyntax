const inputElement = document.getElementById('input');

inputElement.addEventListener('mouseover', () => {
  console.log(inputElement.value);
});

const selectElement = document.getElementById('color');
selectElement.addEventListener('change', () => {
  console.log(selectElement.value);
});

const resultElement = document.getElementById('result');
selectElement.addEventListener('change', () => {
  resultElement.textContent = selectElement.value;
});
