const categoriesEl = document.querySelector('#categories');

const categoriesList = [...categoriesEl.children].forEach(category => {
  const listTitle = category.children[0].textContent;
  const listItemCount = category.children[1].childElementCount;

  const categoryName = document.createElement('li');
  categoryName.textContent = `Категория: ${listTitle}`;

  const elementsCount = document.createElement('li');
  elementsCount.textContent = `Количество элементов: ${listItemCount}`;

  console.log(categoryName.textContent);
  console.log(elementsCount.textContent);
});
