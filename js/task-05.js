const refs = {
  input: document.querySelector('#name-input'),
  greetingName: document.querySelector('#name-output'),
};

const defaultName = refs.greetingName.textContent;

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.greetingName.textContent = event.currentTarget.value;
  if (refs.greetingName.textContent.length === 0) {
    refs.greetingName.textContent = defaultName;
  }
}
