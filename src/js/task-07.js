const refs = {
  rangeScroller: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.rangeScroller.addEventListener('change', changeSize);
refs.rangeScroller.min = 1;
refs.rangeScroller.max = 100;

refs.text.style.fontSize = `${refs.rangeScroller.value}px`;

function changeSize(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
