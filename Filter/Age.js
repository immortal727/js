// ##4

// Напишите функцию, которая принимает на вход 3 аргумета(usersArr, from и to),
// где usersArr - массив пользователей, from - минимальный возраст и to - максимальный возраст 
// (если to не задан, максимальный возраст не ограничен).
// Функция возвращает логины пользователей из массива usersArr, 
// возраст которых находится в диапазоне[from; to)

// ##5
// Напишите функцию, которая принимает на вход 2 обязательных аргумета(usersArr, favouriteLang), 
// где usersArr - массив пользователей, favouriteLang - предпочитаемый язык программирования (агрумент передается строкой).
// Функция возвращает логины пользователей из массива usersArr, у которых в списке предпочитаемых языков есть favouriteLang

//Массив пользователей
let userArr = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];

console.log(userArr);

// ##4
let getByAge = (userArr, from, to = +Infinity) => userArr.filter(e => (e.age >= from && e.age < to));

// ##5
let getByLanguage = (usersArr, Language) =>
    usersArr.filter(e => e.favouriteLangs.some(e => e === Language.toLowerCase()));

// После сортировки
console.log('Сортировка по возрасту - 4 задача');
console.log(getByAge(userArr, 20, 50));

console.log('Задача 5. Вывод пользователей по языку программирования')
console.log(getByLanguage(userArr, `php`));

