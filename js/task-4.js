
const counterValue = document.querySelector('#value');
const incrementBtnEl = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtnEl = document.querySelector(
  '#counter button[data-action="decrement"]',
);

function onDecrementBtnClick() {
  counterValue.textContent--;
}

function onIncrementBtnClick() {
  counterValue.textContent++;
}

incrementBtnEl.addEventListener('click', onIncrementBtnClick);
decrementBtnEl.addEventListener('click', onDecrementBtnClick);