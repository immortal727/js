// 1 по городу, если города равны
// 2 по возрасту, если возраст одинаковый
// 3. по логину

let users = [
    {
        login: "qwe",
        age: 23,
        city: "Москва",
    },
    {
        login: "asd",
        age: 34,
        city: "Москва",
    },
    {
        login: "rty56",
        age: 34,
        city: "Тверь",
    }
];

function sortByCity(usersArr) {
    usersArr.sort(function (a, b) {
        return (a.city.toLowerCase().localeCompare(b.city.toLowerCase()) === 0) ? a.age - b.age : a.city.toLowerCase().localeCompare(b.city.toLowerCase());
    });
users.sort(sortArr);
console.log(users);