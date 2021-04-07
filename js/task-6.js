const inputVal = document.querySelector('[data-length="6"]');

function onInputTyping(evt) {
  
  const inputTextLength = inputVal.value.length;

  console.log(evt.currentTarget.value.length);
  
  if (inputTextLength > 6 || inputTextLength < 6) {
    inputVal.classList.add('invalid');
    inputVal.classList.remove('valid');
  }

 if (inputTextLength === 6) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  }
}

inputVal.addEventListener('blur', onInputTyping);

