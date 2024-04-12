function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divContainer = document.getElementById('boxes');
  for (let i = 0; i < amount; i++) {
    const divNew = document.createElement('div');
    divNew.style.backgroundColor = getRandomHexColor();
    divNew.style.width = `${30 + i * 10}px`;
    divNew.style.height = `${30 + i * 10}px`;
    divContainer.prepend(divNew);
  }
}

function destroyBoxes() {
  const divContainer = document.getElementById('boxes')
  divContainer.innerHTML = '';
}

const inputValue = document.querySelector('input')
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  if (inputValue.value <=  100 && inputValue.value >= 1) {
    createBoxes(inputValue.value);
    inputValue.value = '';
  }
})

destroyButton.addEventListener('click', destroyBoxes);
