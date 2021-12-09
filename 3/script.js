"use strict";

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.buttons');
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('blue'));
btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }

  btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (e) => {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log('click button');
  }
});
