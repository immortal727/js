/* Содать двумерный массив из 3 вложенных массивов, в каждом вложенном массиве по 6 целых чисел
Массив заполнить вручную:
например,
    let someArr = [
          [5, 6, 12, -90, 9, 0], // 6 элементов
          [34, 67, 45, -40, 10, 98], // 6 элементов
          [-77, 88, 99, -99, 1, 3], // 6 элементов
      ];
или случайными (random) числами из отрезка [-99; 99].
Вывести массив в консоль.
Определить и вывести на экран индекс строки с наибольшим по модулю произведением элементов.
Если таких строк несколько, то вывести индекс первой встретившейся из них. */
let array = [];
let proizv;
let arrayProizv=[]
document.write('<table>');
for (let i = 0; i < 3; i++) {
    array[i] = [];
    proizv = 1;
    document.write('<tr>');
    for (let j = 0; j < 6; j++) {
        array[i][j] = parseInt(random(-99, 99));
        document.write('<td>'+array[i][j]+'</td>');
        proizv *= array[i][j]; 
    }
    arrayProizv[i] = proizv;
    document.write('<th>' + proizv+'</th>');
    document.write('</tr>');
}
document.write('</table>');
let index, max = 0;
console.log(arrayProizv);
for (i = 0; i < arrayProizv.length; i++) {
    if (arrayProizv[i] > max) {
        index = i;
        max=arrayProizv[i];
    }
}
document.write('Наибольшее произведение найдено в строке с индексом = '+index);
console.log(array);
console.log('Наибольшее произведение найдено в строке с индексом = ' + index)

function random(min, max) {
    return Math.random() * (max - min) + min;
}