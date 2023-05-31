'use strict';
// alert('Hello'); // только одна кнопка ОК
// const result = confirm('Are you here?'); // confirm(); - это команда 2 кнопки ОК или Отмена (bool true or false)
// console.log(result);
// const answer_1 = prompt('Вам есть 18 лет?', '18'); // prompt для окна подрозумивающего ответ (тип даных строка всегда)
// // console.log(answer);
// console.log(typeof (answer_1)); //typeof() - Оператор typeof возвращает строку, указывающую тип операнда.
// const answer_2 = +prompt(); //если + перед prompt то даные переобразуются в тип даныъ число
// console.log(typeof (answer_2));
const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
document.write(answers); // самая первая команда и самая старая. Существуют новые аналоги
console.log(typeof (answers)); // выведется в консоль надпись 'object'. Массив это отдельный случай обьекта и не является отдельным типом даных
console.log(typeof (null)); // Исключение!!! выведется в консоль надпись 'object' но null это отдельный тип даных!!! Это оффициально признанная ошибка, нужно помнить о этой особенности
// ВАЖНО!!! команды alert, promt, confirm и т.п. существуют внутри браузера, поэтому будут выдавать ошибку в VSCode
console.log(answers); // вывод answers в консоль