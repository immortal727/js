// Напишите функцию range, принимающую три аргумента,
// два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не задан, то равен единице) - шаг для построения массива
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 7, 9]
'use strict'
function range(start, end, step = 1) {
    let array = [];
    if (end === undefined) {
        end = 1
    }
    for (let i = start; i <= end; i += step) {
        array.push(i);
    }
    return array;
}

let arr1 = range(1, 29, 5);
console.log(arr1);

// Анонимные функции
// Не имеют имя, присваиваются переменной, 
//могут быть вызваны только после объявления
let subNums = function (num1, num2) {
    return num1 - num2;
};
// После анонимной функции ставим ;

// Вызов анонимной функции
let a = 90;
let b = 12;
let res = subNums(a, b);
console.log("res=" + res);

// Стрелочные функции
// не имеют arguments, не имеют своего this
// если аргумент 1, кругшлые скобки можно опустить
let sqrt = x => x * x;
// если аргументы не предаются или их больше 1, круглые скобки обязательны
subNums = (num1, num2) => num1 - num2; // одна инструкция
// если инструакция одна - тело фукнции пишется без {}
subNums = (num1, num2) => { // несколько инструкций
    let res = 0;
    if (num1 < num2) res = num2 - num1;
    else res = num1 - num2;
    return res; // обязательно явно указывать return, 
    //если нужно вернуть значение из функции
};
// функция принимает на вход один аргумент, 
// если он >0, увеличивает его на 10, 
// в противном случае уменьшает на 10

let arg = x => (x > 0) ? x += 10 : x -= 10;
// Область видимости именнованных, через function - видимость глобальная
// 

// Написать функцию, которая принимает на вход функцию и массив
// и обрабатывает каждый элемент массива переданной функцией
// функция должна создавать новый массив на основе переданного
function arrFunc(func, someArr) {
    let localArr = [];
    for (let i = 0; i < someArr.length; i++) {
        localArr[i] = func(someArr[i]); // вызов функции func
    }
    return localArr;
}

let arr = [2, 3, 0];
sqrt = num => num * num;
res = arrFunc(sqrt, arr);
console.log(res);

// методы для работы с массивами
arr = [12, -3, 0, 33, 42, 7, -2];
// forEach - позволяет изменять элементы массива
arr.forEach(function (elem, index, array) {
    console.log(`Элемент № ${index}=${elem}`);
    array[index] *= 2; // для изменения элементов необходимо использовать 
    // обращение к элементу по индексу
});

function f(elem, index, array) {
    console.log(`Элемент № ${index}=${elem}`);
    array[index] *= 2;
}

for (let i = 0; i < arr.length; i++) {
    f(arr[i], i, arr);
}

arr = [12, -3, 0, 33, 42, 7, -2];
// метод filter() - возвращает новый массив, состоящий из элементов,
// прошедших проверку переданной функцией
let LessZero = (elem, index, array) => elem < 0;
let newArr = arr.filter(LessZero);
console.log(newArr);

newArr = [];
for (let i = 0; i<arr.length; i++) {
    if (LessZero(arr[i]), i, arr) {
        newArr.push(arr[i]);
    }
}

// Метод map() возвращает новый массив, состоящий из элементов,
// преобразованных переданной фунцией
sqrt = (elem, index, array) => elem * elem;
newArr = arr.map(sqrt);
console.log(newArr);
for (let i = 0; i < arr.length; i++) {
    newArr.push(sqrt(arr[i], i, arr));
}

arr = [12, -3, 0, 33, 42, 7, -2];
// Метод Some возвращает true или false,
// если хотя бы один элемент прошел проверку переданной функцией
LessZero = (elem, index, array) => elem < 0;
res = arr.some(LessZero);
console.log("some() res=" + res); //true

arr = [12, -3, 0, 33, 42, 7, -2];
// Метод every возвращает true или false
// Если хотя бы один элемент не удовлетворяет условию, 
// то вернет false 
LessZero = (elem, index, array) => elem < 0;
res = arr.every(LessZero);
console.log("every() res=" + res); //false

arr = [
    [1, 3, 4],
    [3, 7, 9],
    [-90, 12, -12]
];

// каждый элемент вложенного массива больше 0 ???

console.log(arr);
LessZero = (item, index, array) => {
    for (let i = 0; i < array[index].length; i++) {
        if (item[i] > 0) {
            console.log(`Элемент массива [${index}][${i}] = ` + item[i] + ` > 0`)
            return true;
        }
    }
};

let rez = arr.some(LessZero);
console.log(rez);


// каждый элемент вложенного массива увеличить на 2
arr = [
    [1, 3, 4],
    [3, 7, 9],
    [-90, 12, -12]
];
console.log('Вывод исходного массива');
console.log(arr);


newArr = [];
LessZero = (item, index, array) => {
    console.log(`индекс ${index}`);
    for (let i = 0; i < array[index].length; i++) {
        array[index][i] = item[i] + 2;
        console.log(array[index][i]);
    }
};
newArr = arr.map(LessZero);
console.log('Получилось');
console.log(newArr);


// возраст всех пользователей больше или равен 18
arr = [
    {
        name: "qwe",
        age: 19
    },
    {
        name: "qwe",
        age: 45
    },
    {
        name: "qwe",
        age: 16
    },
];

// Вспоминаем про объекты
let mouse = {
    name: "Jeryy",
    speed: 28,
    printinfo: function () {
        console.log(`Имя ${this.name}`);
        console.log(`Скорость ${this.speed}`);
    },
    changeName: function (newName) {
        this.name = newName; // переопределили значение свойства name
        console.log(`Имя ${arg.name}`);
    }
};

let cat = {
    name: "Tom",
    color: "gray",
    speed: 23,
    mouses: [],
    catchMouse: function (someMouse) { // метод объекта
        // this текущее свойство объекта
        if (this.speed < someMouse.speed) {
            console.log(`${someMouse.name} от ${this.name} сбежала`);
            return;
        }
        this.mouse.push(someMouse);
        console.log(`${this.name} поймал ${someMouse.name}`)
    }
};
// вызов метода catchMouse объекта cat
cat.catchMouse(mouse);
