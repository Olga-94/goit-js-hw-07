
const inputVal = document.querySelector('#validation-input');

function onInputTyping() {
  const inputTextLength = inputVal.value.length;
  const totalLenght = Number(inputVal.getAttribute('data-length'));

  if (inputTextLength > totalLenght || inputTextLength < totalLenght) {
    inputVal.classList.add('invalid');
    inputVal.classList.remove('valid');
  }

  if (inputTextLength === totalLenght) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  }

  if (!inputTextLength) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  }
}

inputVal.addEventListener('blur', onInputTyping);