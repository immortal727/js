let userData = {};
userData.name = 'Анна';
console.log(userData);
userData.age = 28;
userData.favouriteColors = ['red', 'orange', 'yellow'];
console.log(userData.age);

// Проверка на наличие свойства в объекте
// 1. Проверка на undefined
if (userData.avatar === undefined) userData.avatar = 'default.png';
userData.login = null; // не undefined
console.log(userData);

// 2. вариант проверка оператором in
if ("githublink" in userData) userData.githublink = null;
console.log(userData);

let jsBook = { title: "Моя книга", autor: "Dmitriy", pageCount:35  };
console.log(jsBook);
let phpBook = { title: "Моя книга", autor: "Dmitriy", pageCount: 22 } 
console.log(phpBook);
userData.books=[jsBook, phpBook];
console.log(userData);

// Перебор свойства объекта for in
for(let propName in jsBook){
    // на каждой интерации цикла имя свойства будет копироваться
    // впеременную propName
    console.log(`имя свойства ${propName}`, `значение свойства ${jsBook[propName]}`);
}
let masseges = [ // запросить у пользователя код сообщения, вывести
    // все сообщения код которых выше введенного]
    {
        text: 'short message',
        priority: 'hight',
        code: 12
    },
    {
        text: 'long message',
        priority: 'low',
        code: 424
    },
    {
        text: 'message',
        priority: 'hight',
        code: 143
    }
]

let n = prompt('Введите число');

/*for (let i = 0; i < masseges.length; i++) {
    if (n < masseges[i].code) {
        console.log(masseges[i].text);
    }
}*/

for(let i = 0; i < userData.books.length; i++) {
    if (userData.books[i].pageCount > 500) { console.log(userData.books[i].title) }
}

for (let elem of userData.books) {
    if (elem.pageCount > 500) { console.log(elem.title); }
}

// Деструктуризация
phpBook = {
    title: "Моя книга",
    autor: "Dmitriy",
    pageCount: 22
}
let phpBook = { title: "Моя книга", autor: "Dmitriy", pageCount: 22 };
let { autor: authorVar, pic: picVar = null, ...other } = phpBook;

console.log(authorVar);
console.log(picVar);
console.log(other);

let user = {
    login: 'qwe',
    pwd: '123',
    name: 'Евгений',
};

let { pwd: pass, login: login = 'qwerty', ...other2 } = user;

// Деструктуризация массива
let colors = userData.favouriteColors; //[ 'red', 'orange', 'yellow']
let [redColor, orangeColor] = colors;
console.log(redColor); // red
console.log(orangeColor); // orange

let [color1, color2, color3, color4 = 'green'] = colors;
console.log(color1, color2, color3, color4);

// Перебор 
for (let [key, val] of Object.entries(phpBook)) {
    console.log(`key= ${key}, val = ${val}`);
}