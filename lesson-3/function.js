// каждый элемент вложенного массива увеличить на 2
let arr = [
    [1, 3, 4],
    [3, 7, 9],
    [-90, 12, -12]
];
console.log('Вывод исходного массива');
console.log(arr);

let newArr = [];
LessZero = (item, index, array) => {
   // console.log(`индекс ${index}`);
    for (let i = 0; i < array[index].length; i++) {
        array[index][i] = item[i] + 2;
    }
    return item;
};

console.log('Получилось');
newArr = arr.map(LessZero);
console.log(newArr);
