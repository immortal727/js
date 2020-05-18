'use strict'
let arr = [
    [1, 3, 4],
    [3, 7, 9],
    [-90, 12, -12]
];

// Каждый элемент вложенного массива больше 0 ???
//console.log(arr);
/*let LessZero = (item, index, array) => {
    for (let i = 0; i < array[index].length; i++) {
        if (item[i] > 0) {
            console.log(`Элемент массива [${index}][${i}] = ` + item[i] + ` > 0`)
            return true;
        }
    }
};*/

/*let rez = arr.some(LessZero);
console.log(rez);*/

//Вывод элементов массива, больше 0
arr.forEach((elem, index, array) => array[index] = elem.filter((elem, index, array) =>elem > 0));

//Каждый элемент умножается на 2
//arr.forEach((elem, index, array) => array[index].map((item, index, array) => array[index] *= 2));
console.log(arr);

