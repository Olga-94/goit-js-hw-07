
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onInputTyping(evt) {
  nameOutput.textContent = evt.currentTarget.value;

  if (!nameOutput.textContent) {
    nameOutput.textContent = 'незнакомец';
  }
}

input.addEventListener('input', onInputTyping);