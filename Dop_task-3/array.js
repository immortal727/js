/* Заполните массив на n элементов случайным числами и выведете максимальное, 
 * минимальное и среднее значение. Размер массива (n) вводит пользователь */

let min=0, max=min, mean, sum=0;
let size = prompt('Введите размер массива');
let array = [];

for (let i = 0; i<=size; i++) {
    array[i] = parseInt(random(0, 100));
    if (array[i] > max) {
        max = array[i];
    } else min = array[i];
    sum += array[i];
} 
mean = sum / size;
console.log('Произвольный массив ' + array);
console.log('Минимальное число = ' + min);
console.log('Максимальное число = ' + max);
console.log('Среднее число = ' + parseInt(mean));

function random(min, max) {
    return Math.random() * (max - min) + min;
}