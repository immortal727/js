/*Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Завершите решение так, чтобы оно возвращало сумму всех чисел кратных 3 или 5.*/
function solution(number) {
    let arr = [];
    for (let i = 1; i < number; i++) {    // генерируем массив от 1 до number
        arr[i] = i;
    }
    return arr;
}
//let sum = 0, arr2=[];

let arr = solution(10);
console.log(arr);
let result = arr.filter(elem => elem % 3 === 0 || elem % 5 === 0).reduce((sum, elem) => sum + elem, 0);
/*arr2 = arr.filter((elem, index, array) => (elem % 3 === 0 || elem % 5 === 0));
arr2.forEach((elem, index, array)=> sum += elem);
console.log(`Сумма элементов массива ${arr2} = ${sum}`);*/
console.log(result);