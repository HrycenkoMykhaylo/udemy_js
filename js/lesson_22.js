'use strict';
let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		// break; // прерывает программу
		continue; //позволяет пропустить тот шаг который нам не нужен не прерывая программы
	}
	console.log(i);
}