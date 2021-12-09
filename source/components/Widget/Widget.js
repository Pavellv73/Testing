import './Widget.scss';
import data from '../../../static/data.json';

function getData() {
  return data;
}

function generateItem(item) {
  const newDate = new Date(item.date).toDateString();
  return `<div class="widget__content-message">
        <h4 class="widget__content-message__title">${item.title}</h4>
        <p class="widget__content-message__text">${item.message}</p>
        <p class="widget__content-message__author">${item.author}</p>
        <p class="widget__content-message__date">${newDate}</p>
        <a href="\`${item.link}\`" class="widget__content-message__link">Читать больше</a>
      </div>`;
}

const widget = document.querySelector('.widget');
const content = widget.querySelector('.widget__content');
const lenta = widget.querySelector('.widget__content-messageList');

function initWidget() {
  const values = getData();
  values.data.forEach((item) => {
    const msg = generateItem(item);
    lenta.innerHTML += msg;
  });
}

function come(elem) {
  const docViewTop = lenta.scrollTop;
  const docViewBottom = docViewTop + lenta.offsetHeight;
  const elemTop = elem.offsetTop;
  const elemBottom = elemTop + elem.offsetHeight;

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

lenta.addEventListener('scroll', () => {
  const messages = lenta.querySelectorAll('.widget__content-message');
  messages.forEach((i) => {
    if (come(i)) {
      setTimeout(() => {
        i.classList.add('widget__content-message--read');
      }, 1000);
    }
  });
});

widget.addEventListener('click', () => {
  content.classList.toggle('widget__content--visible');
});

document.addEventListener('DOMContentLoaded', initWidget());
