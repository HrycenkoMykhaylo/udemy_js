// 'use strict';
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// console.log(`Объект OPTIONS имеет ${Object.keys(options).length} значений`);
'use strict';
const options = {
    name: 'test',
    width: 1024,
    height1: 1024,
    height2: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test'); //создали свой метод
    }
};
options.makeTest();
const { border, bg } = options.colors;
console.log(border);

function getCorrectEnding(number, forms) {
    const cases = [2, 0, 1, 1, 1, 2];
    const formIndex = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
    return forms[formIndex];
}

const numValues = Object.keys(options).length;
const valuesEnding = getCorrectEnding(numValues, ['значение', 'значения', 'значений']);

console.log(`Объект OPTIONS имеет ${numValues} ${valuesEnding}`);
// console.log(options.name);
// delete options.name; //метод delete удаляет
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет знаение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет знаение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(`Внутри объекта находится ${counter} свойств`);