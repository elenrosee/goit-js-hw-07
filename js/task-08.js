const refs = {
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = createRandomRGB();

    fragment.appendChild(box);
  }

  refs.boxes.appendChild(fragment);
}

function createRandomRGB() {
  const red = Math.round(Math.random() * (255 - 0) + 1);
  const blue = Math.round(Math.random() * (255 - 0) + 1);
  const green = Math.round(Math.random() * (255 - 0) + 1);

  const color = `rgb(${red}, ${green},${blue})`;

  return color;
}
