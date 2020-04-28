// Функции - небольшие подпрограммы, в которых мы описываем
// необходимые нам действия
// и которые могут выполняться каждый раз при вызове

// Функции в js - объекты
// функции могут быть именоваными, анонимными (+ стрелочные функии)

let a = 34;
let b = 12;
//console.log(a + b);

let n = 56;
let m = 90;
//console.log(n + m);

// именнованые функции
// объявление именованых функций
function getSum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
} // после фигурной скобки нет точки с запятой
// Если функция именованая

// Вызов функции имяФункции(параметры)
getSum(a, b);

function delenie(num1, num2) {
    if (num2 === 0) {
        console.log('Делить на 0 нельзя');
        return;
    } 
    let rez = num1 / num2;
    console.log(rez);
}
delenie(m, 0);

function sub(num1, num2) {
    return num1 - num2; // возвращает значение из функции
}
// return прерывает работу функции и
// возвращает значение из функции

let result = sub(a, b);
console.log(result);

// написать функцию, которая принимает на вход имя
// и выводит в консоль "Добро пожаловать, ИМЯ"

function greet(item='Гость') { // значение аргументов по умолчанию
    console.log(`Добро пожаловать, ${item}`)
}

let imya = "Влад";
greet(); // Если функция использует аргументы, 
//а мы передаем без, то выдача будет undefined

// написать функцию, которая принимает на вход 2 числа 
// и возвращает наименьшее из них
// если в функцию не передан хотя бы один аргумент - сообщить об этом
// и прервать работу функции
// Если хотя бы один аргумент не чилсо - сообщить об этом и прервать работу функции

function getMin(a, b) {
    if (a === undefined || b === undefined) {
        console.log('Один из аргументов не передан');
        return false;
    }
    if (typeof a!== "number" || typeof b!== "number"){
        console.log('Один из элементов не является числом');
        return false;
    }
    return (a > b) ? console.log(`${b} наименьшее число`): console.log(`${a} наименьшее число`);
}

getMin(0, 6); 

// функция принимает на вход массив целых чисел
// возвращает сумму значений элементов

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [3, 7, 9, 0];
arrSum(arr);

function changeStr(str) {
    str += " продолжение строки";
}
function changeArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 3;
    }
}

let str = "Строка";
arr = [3, 7, 9, 0];
changeStr(str);
changeArr(arr);

console.log(str);
console.log(arr);

// Объекты передаются по ссылке
// Строки по значению (происходит копирование)

let k = 4;
let h = k;
k = 89;
console.log(k); // 89
console.log(h); // 4

// объекты передаются по ссылке, примитивы - по значению

let someArr = [45, 78, 90];
let otherArr = someArr;
console.log(someArr); // [[45, 78, 90]]
console.log(otherArr); // [[45, 78, 90]]

// переменное количество аргументов
// оператор ... spread

function sumNums(...nums) {
    // оператор ... собирает элементы в массив
    console.log('nums:', nums);
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log("sum: ", sum);
    return sum;
}
sumNums(34, 78);
sumNums(34, 78, 12, 90, 34);

function sumThreeElems(a, b, c) {
    return a + b + c;
}
arr = [4, 78, 0, -10];
let resArr = sumThreeElems(...arr);
// -10 и остальные элементы в этом случае никуда не скопируются
console.log("resArr " + resArr);

// Как делали раньше, когда не было оператора ... spread

function printArgs() {
    // все аргументы собираются в спсевдомассив argumnets
    for (let arg of arguments) {
        console.log(arg);
    }
} 
printArgs(3, null, [2, 5, 'String']);

function printNums(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
printNums(3);

// Рекурсивный вызов функции
function printsNums2(num) {
    if (num >=0) {
        console.log(n);
        printsNums2(num - 1);
    }
}
printsNums2(3);

// замыкание 
function multi(n) {
    let x = n;
    return function (m) {
        return x * m;
    }
}
let multiSix = multi(6);
console.log(multiSix);
result = multiSix(5);
console.log(result); // 30
result = multiSix(10);
console.log(result); // 60

// Самовызывающаяся функция
(function() {
    console.log('самовызывающаяся функция')
}())