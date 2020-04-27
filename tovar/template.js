// задача на вывод книг
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', count: 2 },
    { author: 'Толстой', title: 'Война и мир', count: 0 },
    { author: 'Лермонтов', title: 'Тамань', count: 3 },
    { author: 'Гончаров', title: 'Обломов', count: 10 }
];

// вывести информацию о товаре
// Название
// Автор
// - 10 +
// если количество 0 -> [- 0 +] нельзя нажать на + и -
// при нажатии на + количество увеличивается (но не больше количества),
// при нажатии на - уменьшается (но не меньше 0)
// Дополнительно: можно ввести количество с клавиатуры

let section = document.querySelector(".tovars");
let kol_books = books.length;
let kol_tovars = 0;
let minus = document.querySelector("btnMinus");
let plus = document.querySelector("btnPlus");

minus.addEventListener('click', Minus.bind(minus, books));
plus.addEventListener('click', Plus.bind(plus, books));

function generateField(Books) {
    let cell__grid = document.getElementsByClassName('tovars')[0]; // Получаем первый элемент

    //Оформляем GRID
    cell__grid.style.cssText = `
        grid-template-columns: repeat(${kol_books},1fr);
        grid-template-rows:  repeat(${kol_books},1fr);
   `;

    //Добавляем ячеки
    for (let i = 0; i < kol_books; i++) {
        let div = document.createElement('div');
        creatElem(i,Books, div);
        cell__grid.append(div);
    }
}
function creatElem(item, Object, div) {
    console.log(Object);
    let title = document.createElement("h3");
    title.innerText = Object[item].title;
    let author = document.createElement("cite");
    author.innerText = Object[item].author;
    let counter = document.createElement("div");
    counter.classList.add('counter');
    let count = document.createElement("input");
    count.setAttribute("type", "text");
    count.classList.add("count");
    count.setAttribute("type", "number");
    count.setAttribute("value", "0");
    //  count.innerText = Object[item].count;
    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("type", "text");
    btnMinus.setAttribute("readonly", "");
    btnMinus.setAttribute("value", "-");
    btnMinus.classList.add("btnMinus");
    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("type", "text");
    btnPlus.setAttribute("readonly", "");
    btnPlus.setAttribute("value", "+");
    btnPlus.classList.add("btnPlus");
    counter.append(btnMinus, count, btnPlus);
    div.append(title, author, counter);
}

generateField(books);

function Plus(Tovar, event) {
    console.log("event", event);
   // plus.innerText.Tovar.count
}