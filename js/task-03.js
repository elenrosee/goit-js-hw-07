const galleryEl = document.querySelector('#gallery');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const addListItems = [...images]
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" width = 300px ></img></li>`,
  )
  .join(' ');

galleryEl.insertAdjacentHTML('afterbegin', addListItems);

const galleryItemsStyle = [...galleryEl.children].forEach(li => {
  li.style.margin = '20px';
  li.style.display = 'flex';
  li.style.listStyle = 'none';
});
