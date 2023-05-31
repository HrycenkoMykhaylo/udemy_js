'use strict';
let number = 4.6; // number подчеркнута желтым потому что переменная нигде не используется
console.log(4 / 0); // Infinity (бесконечность)
console.log(-4 / 0); // -Infinity (бесконечность)
console.log('string' * 9); // NaN (Not a Number)
const persone = 'Alex_98'; // Все что в кавычках это строка
const bool = false;
// console.log(something); // null - ссылка на несуществующий объект (something is not defined - не определено(не задано))
let und;
console.log(und); // undefined - ссылка на неопределенное значение
const obj = { // {} - все что внутри фигурных кавычек это объект.
	name: 'John', // name,age,isMarried - даные внутри кавычек это свойства.
	age: 25, // John, 25, false - это значения свойства.
	isMarried: false //действия внутри кавычек это методы.
}; //name, age, isMarried так же являются ключами значений.
console.log(obj.name); // 1й способ обращения к свойствам внутри обьекта.
console.log(obj['name']); // 2й способ обращения к свойствам внутри обьекта.
let arr = ['plum.png', 4, [], 'apple.bmp', {}, 'text', 'orange.jpg',]; // массивы могут содержать любые типы даных
console.log(arr[1]); // в массиве ключи заданы по умолчанию (0,1,2,3...n)