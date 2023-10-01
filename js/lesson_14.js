'use strict';
const category = 'TOYS';
console.log('https://someurl.com/' + category + '/' + '5'); // 1-й вариант записи через обычные кавычки '
console.log(`https://someurl.com/${category}/5`); // 2-й вариант записи только через бектики "`"
const user = 'Ivan';
alert(`Привет, ${user}`);