/* В переменной n хранится натуральное трёхзначное число. Вывсети в консоль сумму цифр числа n. */
let number = prompt('Введите трехзначное число');
let sum=0;
console.log('Введенное число - ' + number);
for (let elem of number) {
    sum += parseInt(elem);
}
console.log('Сумма всех цифр в числе = ' + sum);