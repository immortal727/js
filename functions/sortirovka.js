// массив sort()
let someArr = ["Москва", "СПб", "Тверь", "Владивосток", "Анапа"];
comeArr.sort();
console.log(someArr);
 // sort() Cортируемт по алфавиту в лексикографическом порядке

someArr = [7, 40, 600, 6];
someArr.sort();
console.log(SomeArr); // [40, 6, 600, 7] сравнивает как символы

// Нужно отсортировать по городам пользователей
let users = [
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
function sortArr(first, second) {
    // функция должна возвращать:
    // 0, если first == second
    // -1, если first < second
    // 1, если first > second
 
    return first.city.localeCompare(second.city);
}
someArr.sort(sortArr);
console.log(someArr);