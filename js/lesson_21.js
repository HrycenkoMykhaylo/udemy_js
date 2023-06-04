'use strict';
// const hamburger = true;
// const fries = true;
// if (hamburger && fries) {
// 	console.log('I\'m full');
// }
// console.log((hamburger && fries)); //return bool type Significance

/* 
В JavaScript существует несколько значений, 
которые интерпретируются как логическое значение false. 
Вот пять сущностей, которые можно рассматривать как false в JavaScript:

false: Это само значение false, которое представляет логическое ложное значение.
0: Число 0 интерпретируется как ложное значение.
'' (пустая строка): Пустая строка также является ложным значением.
null: Значение null рассматривается как ложное значение.
undefined: Значение undefined также интерпретируется как ложное значение.
NaN (Not a Number)
*/
// const hamburger = 3;
// const fries = 1;
// const cola = 1;
// console.log(hamburger === 3 && cola && fries); //оператор && возврращает первое ложное значение
// if (hamburger === 3 && cola && fries) {
// 	console.log('I\'m full');
// } else {
// 	console.log('We go away');
// }
//оператор && возврращает первое ложное значение
//если все верно то оператор возвращает последнее значение
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 0 && 1 && 6); //оператор && возврращает первое ложное значение
console.log(0 && 'Some text');

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('We are happy');
} else {
	console.log('We go away');
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);

