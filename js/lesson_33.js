'use strict';
const arr = [2, 3, 6, 8, 4];
// arr[99] = 43;
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); //1-й способ (для обектов и массивов)
// }
// // arr.pop(); //удаляет последний элемент массива
// // arr.push(1); //добавляет определенный элемент масива в конец массива
// // console.log(arr);
// for (let value of arr) {
//     console.log(value);
// } //2-й способ (for of только для массива)

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt('', '');
const products = str.split('b');
console.log(products);
