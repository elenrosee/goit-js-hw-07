const refs = {
  input: document.querySelector('#name-input'),
  greetingName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.greetingName.textContent = event.currentTarget.value;
}
