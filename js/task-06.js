const refs = {
  input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('input', validationInputText);

function validationInputText(event) {
  const requiredLength = Number(this.dataset.length);
  const inputValue = event.currentTarget.value.length;

  this.addEventListener('blur', checkLength);

  function checkLength() {
    this.classList.add();
    requiredLength === inputValue
      ? (this.classList = 'valid')
      : (this.classList = 'invalid');
  }
}
