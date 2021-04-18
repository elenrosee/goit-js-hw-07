const refs = {
  input: document.querySelector('#name-input'),
  greetingName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.greetingName.textContent = event.currentTarget.value;
}
