// 'use strict';
// let usdCourse = 37;
// var eurCourse = 42;
// function convert(amount, course, jj) {
//     return (amount * course / jj);
// }
// console.log(convert(500, usdCourse, 10));
// console.log(convert(500, eurCourse, 10));

// В JavaScript принцип DRY (Don't Repeat Yourself) 
// рекомендует избегать повторения кода.
// Он подразумевает, что каждая часть функциональности 
// или информации должна иметь только одну, недвусмысленную 
// и авторитетную представляющую сущность в системе.

// function getMathResult1(num, times) {
//     if (typeof (times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;        // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + '---';
//         }
//     }
//     return str;
// }
// console.log(getMathResult1(10, 50));

// function getMathResult2(num, times) {
//     if (typeof (times) !== 'number' || times <= 0) {
//         return (num);
//     }
//     let str = '';
//     for (i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
// console.log(getMathResult2(10, 50));

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }
    let str = '';
    for (i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}
console.log(getMathResult(5, 3));