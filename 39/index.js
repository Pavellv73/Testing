// const timerId = setTimeout(() => {
//   console.log('hello');
// }, 1000);

// const timerId_2 = setTimeout(
//   (text) => {
//     console.log(text);
//   },
//   1000,
//   'test'
// );

const btn = document.querySelector('.btn');
let timerId;

function animation() {
  const el = document.querySelector('.box');
  let pos = 0;

  let id = setInterval(frame, 50);

  function frame() {
    if (pos === 100) {
      clearInterval(id);
    } else {
      pos++;
      el.style.width = pos + 'px';
    }
  }
}

btn.addEventListener('click', () => {
  animation();
});

// let i = 0;

// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }

//   console.log('text');
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log('hello');
//   id = setTimeout(log, 500);
// }, 500);
