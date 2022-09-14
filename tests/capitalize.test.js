// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

// if (capitalize(123) !== '') {
//   throw new Error('Функция работает неверно!');
// }

console.log('Все тесты пройдены!');
