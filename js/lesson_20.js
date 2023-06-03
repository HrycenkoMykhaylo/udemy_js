'use strict';
// if (4 == 9) {
// 	console.log('OK!');
// } else {
// 	console.log('Error');
// }
// const num = 50;
// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Too much');
// } else {
// 	console.log('OK!');
// }
// (num === 50) ? console.log('OK!') : console.log('Error');
const num = 50;
switch (num) {
case 49:
	console.log('Wrong..');
	break;
case 51:
	console.log('Wrong..');
	break;
case 50:
	console.log('Bingo!');
	break;
default:
	console.log('Not this time');
}