﻿/* Написать код, который будет проверять попало ли случайно 
 сгенерированное целое число из отрезка [5;122] в интервал (25;100) и выводить результат в консоль. 
 Например, число 113 не содержится в интервале (25,100) / число 72 содержится в интервале (25,100) */

let min = 5;
let max = 122;
let number = parseInt(random(min, max));
console.log('Случайное число = ' + number);

if (number >= 25 && number <= 100) {
    console.log('Число ' + number + ' содержится в интервале (25,100)');
} else console.log('Число ' + number + ' не содержится в интервале (25,100)');

function random(min, max) {
    return Math.random() * (max - min) + min;
}