function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyChange = document.querySelector('body');
const btnChange = document.querySelector('button');
const spanChange = document.querySelector('.color');

btnChange.addEventListener('click', function () {
  bodyChange.style.backgroundColor = getRandomHexColor();
  spanChange.textContent = getRandomHexColor();
});
