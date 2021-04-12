const ingredientsEl = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const fragment = document.createDocumentFragment();

const listItems = [...ingredients].map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;

  fragment.appendChild(listItem);
});

ingredientsEl.appendChild(fragment);

// *
// or next one
// *

//const addListItems = [...ingredients].map(item => `<li>${item}</li>`).join(' ');

//ingredientsEl.insertAdjacentHTML('afterbegin', addListItems);
