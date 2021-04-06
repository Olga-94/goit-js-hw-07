
const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('span#text');
const fontSize = textEl.setAttribute('style', `font-size: ${rangeEl.value}px`);

function changeFontSize() {
  textEl.setAttribute('style', `font-size: ${rangeEl.value}px`);
}

rangeEl.addEventListener('input', changeFontSize);