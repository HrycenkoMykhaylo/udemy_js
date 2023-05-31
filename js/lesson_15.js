'use strict';
console.log('arr' + ' - object');
console.log(4 + +'5'); // '+' называется унарным плюсом перед строкой '5' и переобрахует строку в число
let incr = 10,
	decr = 10; // название переменных можно записывать через зарятую
// ++incr; // +1 префиксная запись
// --decr; // -1 префиксная запись
// incr++; // +1 постфиксная запись
// decr--; // -1 постфиксная запись
// console.log(incr);
// console.log(decr);
console.log(incr++); // постфиксная форма возвращает старое значение
console.log(decr--); // постфиксная форма возвращает старое значение
// console.log(incr);
// console.log(decr);
console.log(++incr); // префиксная форма возвращает новое значение +1
console.log(--decr); // префиксная форма возвращает новое значение -1
console.log(5 % 2); // оператор % возвращает остаток от деления 
console.log(2 * 4 == 8); // оператор == сравнивает, возвращает true or false
console.log(2 * 4 == '8'); // оператор == сравнивает, возвращает true or false без проверки типа даных
console.log(2*4 === '8'); // оператор === строго сравнивает, возвращает true or false с проверкой типа даных
// && // оператор and ('и'); true or true; && - два амперсанта
// || // оператор or ('или'); false or true
const
	isChacked = true,
	isClosed = true;
console.log(isChacked && isClosed);
console.log(isChacked || isClosed);
console.log(isChacked || !isClosed); // ! - оператор отрицания переводит значение в проитвоположное


