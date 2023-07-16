// 'use strict';
// // function calculateVolumeAndArea(length) {
// //     if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
// //         return 'При вычислении произошла ошибка';
// //     }

// //     let volume = 0,
// //         area = 0;

// //     volume = length * length * length;
// //     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
// //     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
// //     area = 6 * (length * length);

// //     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// // }

// // console.log(calculateVolumeAndArea(3));

// // function calculateVolumeAndArea(length) {
// //     if (typeof (length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
// //         return 'При вычислении произошла ошибка';
// //     }
// //     let volume = 0, area = 0;
// //     volume = length * length * length;
// //     area = 6 * (length * length);
// //         return`Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// // }
// // console.log(calculateVolumeAndArea(3));

// // Напишите функцию, которая будет определять номер купе по переданному ей номеру места.Наглядно:

// // Функция принимает только целое число от 1 до 36.
// // Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// // "Ошибка. Проверьте правильность введенного номера места"
// // Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// function getCoupeNumber(placeNumber) {
//     if (typeof (placeNumber) !== 'number' || placeNumber <= 0 || !Number.isInteger(placeNumber)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     if (placeNumber === 0 || placeNumber > 36) {
//         return 'Таких мест в вагоне не существует';
//     }
//     return Math.ceil(placeNumber / 4);
// }
// console.log(getCoupeNumber(36));

// // Место для второй задачи
// // function getCoupeNumber(seatNumber) {
// //     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
// //         return "Ошибка. Проверьте правильность введенного номера места";
// //     }

// //     if (seatNumber === 0 || seatNumber > 36) {
// //         return "Таких мест в вагоне не существует";
// //     }

// //     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)

// function getCoupeNumber(placeNumber) {
//     if (typeof placeNumber !== 'number' || placeNumber <= 0 || !Number.isInteger(placeNumber)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     if (placeNumber > 36) {
//         return 'Таких мест в вагоне не существует';
//     }
    
//     return Math.ceil(placeNumber / 4);
// }
// getCoupeNumber(13);


// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    let minutesStr = '';

    if (minutes >= 11 && minutes <= 14) {
        minutesStr = 'минут';
    } else {
        const lastDigit = minutes % 10;
        switch (lastDigit) {
            case 1:
                minutesStr = 'минута';
                break;
            case 2:
            case 3:
            case 4:
                minutesStr = 'минуты';
                break;
            default:
                minutesStr = 'минут';
        }
    }

    return `Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`;
}


console.log(getTimeFromMinutes(352));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
console.log(findMaxNumber(1, 2.5, 0, -4));

// Место для второй задачи

function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }
    
    let result = '';
    let first = 0;
    let second = 1;

    for (i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}

console.log(fib(100));