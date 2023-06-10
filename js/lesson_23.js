'use strict';
// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++)
// 		console.log(j);
// }

//Мой первый неправильный пример задачи про пирамидку с '*'.
// for (let i = '*'; i < 7; i++) {
//     console.log(i);
//     brake;
// }

let result = '';
const length = 10;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}
const adin = 1;
const dva = 10;
var stape = adin + dva;
for (let i = adin; i <= stape; i++) {
    if (i = 5) {
        // break;
        continue;
    }
    console.log(i);
}