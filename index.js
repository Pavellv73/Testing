// ---------------
// function fitst() {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// };

// function two() {
//   console.log(2);
// };

// fitst();
// two();

// function learnJS(lang, callback) {
//   console.log("я учу " + lang);
//   callback();
// };

// function done() {
//   console.log("666");
// };

// learnJS("js", done);

// ---------------
// let options = {
//   width: 1024,
//   height: 1024,
//   name: "test"
// };

// options.boolean = false;
// options.color = {
//   1: "red",
//   2: "green"
// };

// console.log(options);

// for (let key in options) {
//   console.log('Свойсво ' + key + ' имеет значение ' + options[key]);
// };

// console.log(Object.keys(options).length);

// ---------------
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [1, 22, 33, 765];

// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push("11");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("666");
// console.log(arr);
// arr[99] = 99;

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };

// arr.forEach(function(item, i, maps) {
//   console.log(i + ': ' + item + ", массив: " + maps);
// });

// for (let key in arr2) {
//   console.log(key);
// }

// for (let key of arr2) {
//   console.log(key);
// }

// let a = prompt("", "");
// let arr3 = [];

// arr3 = a.split(',');
// console.log(arr3);

// let arr = ["qwe", "wer", "111"];
// let i = arr.join('*');
// console.log(i);

// let arr = ["qwe", "wer", "111", "222", 111, 888];
// let arr2 = [1, 45, 33, 666]
// let i = arr2.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// };

// console.log(i);

// ---------------
// let soldier = {
//   armor: 100,
//   health: 100
// };

// let jonh = {
//   health: 50
// };

// jonh.__proto__ = soldier;

// console.log(jonh);
// console.log(jonh.armor)

// ---------------

// console.log(typeof(String(4)));
// console.log(typeof("qwe" + false));
// console.log("https://vk.com/" + 1522);

// console.log(typeof(Number("4")));
// console.log(typeof(+"1"));
// console.log(typeof(5 + +"1"));
// console.log(typeof(parseInt('15px', 10)));
// let ans = +prompt("hello", '');
// let x = 5; alert( x++ );
// console.log([ ] + false - null + true);
// let y = 1; let x = y = 2; alert(x);
// console.log([ ] + 1 + 2); ???
// alert( "1"[0] )
// console.log(2 && 1 && null && 0 && undefined );
// let a, b;
// console.log(!!( a && b ));
// console.log(( a && b ));
// alert( null || 2 && 1 || 4 );
// a = [1, 2, 3]; b = [1, 2, 3];
// console.log(a==b);
// alert( typeof(+"infinity"));
// console.log( "Ёжик" > "Яблоко");
// console.log( 0 || "" || 2 || undefined || true || falsе);
