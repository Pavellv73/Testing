function addMenuItem() {
  const menu = document.querySelector('.menu');
  const item = document.createElement('li');

  item.innerHTML = "Пятый пункт";
  item.classList.add('menu-item');
  menu.append(item);
};

function fixBg() {
  const body = document.querySelector('body');

  body.style.background = "#000 url('img/apple_true.jpg') center no-repeat";
};

function fixTitle() {
  const title = document.querySelector('.title');

  title.innerHTML = 'Мы продаем только подлинную технику Apple';
};

function remoteAdvert() {
  const advert = document.querySelector('.adv');

  advert.remove();
};

function question() {
  window.setTimeout(() => {
    const block = document.getElementById('prompt');
    const i = prompt('Купишь айфон?', '');
    console.log(i);
    block.innerHTML = i;
  }, 1000)
};

addMenuItem();
fixBg();
fixTitle();
remoteAdvert();
question();
