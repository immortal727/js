// Создать двумерный массив из 3 строк по 6 столбцов в каждом
// Заполнить слулчайными (random) числами из отрезка [-99; 99].
// Вывести массив в консоль.
// Найти значение максимального элемента массива (вывести его индекс и значение)
let array = [];
let max = 0;
let index1;
let index2;
for (let i = 0; i < 3; i++) {
    array[i] = [];
    for (let j = 0; j < 6; j++) {
        array[i][j] = parseInt(Random(-99, 99));
        if (array[i][j] > max) {
            max = array[i][j];
            index1 = i;
            index2 = j;
        }
    }
}
console.log(array);
console.log('Макимальный элемент в массиве ['+index1+']'+'['+index2+']'+ ' = ' + max)
function Random(min, max) {
    return Math.random() * (max - min) + min;
}