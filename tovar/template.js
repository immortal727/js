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
let n = books.length;
let kol_tovars = 0;

let createArray = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    return arr;
};

function generateField(Books) {
    let cell__grid = document.getElementsByClassName('tovars')[0]; // Получаем первый элемент
    //let arr = createArray(n);
    //Оформляем GRID
    cell__grid.style.cssText = `
        grid-template-columns: repeat(${n},1fr);
        grid-template-rows:  repeat(${n},1fr);
   `;

    //Добавляем ячеки
    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        creatElem(i,Books, div);
        cell__grid.append(div);
    }
}
function creatElem(item, Object, div) {
    let title = document.createElement("h3");
    title.innerText = Object[item].title;
    let author = document.createElement("cite");
    author.innerText = Object[item].author;
    let counter = document.createElement("div");
    counter.classList.add('counter');
    let count = document.createElement("input");
    count.classList.add("count");
    count.setAttribute("type", "number");
    count.setAttribute("value", "0");
    //  count.innerText = Object[item].count;
    let hidden = document.createElement("input");
    hidden.setAttribute("value", Object[item].count);
    hidden.setAttribute("type", "hidden");
    hidden.classList.add("hidden");
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
    counter.append(btnMinus, count, btnPlus, hidden);
    div.append(title, author, counter);
}

generateField(books);

let btnMinusList = document.querySelectorAll('.btnMinus'); 
let btnPlusList = document.querySelectorAll(".btnPlus");
let hidden = document.querySelectorAll(".hidden");
let btnCountList = document.querySelectorAll('.count');

btnPlusList.forEach(btnPlus => btnPlus.addEventListener('click', () => changeCountPlus(event)));
btnMinusList.forEach(btnPlus => btnPlus.addEventListener('click', () => changeCountMinus(event)));
btnCountList.forEach(count => count.addEventListener('change', () => changeCount(event)));

function changeCountPlus(event) {
   event.preventDefault(); // Чтоб не отправлялось на сразу на сервер
   let maxKol = this.event.target.parentElement.children[3].value;
   let number = this.event.target.parentElement.children[1];
    
  // console.log("Максимальное кол-во книг ", maxKol);
    // При клике на плюс прибавляем значение в центральном счетчике товаров
    // Если превысило допустимое кол-во товаров, то оставляем число макс. кол-вом
    +number.value >= +maxKol ? number.value = maxKol : number.value++;
   // console.log(`Счетчик товаров ${number.value}`)
}

function changeCountMinus(event) {
    event.preventDefault(); // Чтоб не отправлялось на сразу на сервер
    let number = event.target.parentElement.children[1];
    
    // При клике на минус удаляем по одному значению в центральном счетчике товаров
    // Если <0 оставляем 0
    number.value <= 0 ? number.value = 0 : number.value--;
}

function changeCount(event) {
    event.preventDefault(); // Чтоб не отправлялось на сразу на сервер
    let maxKol = this.event.target.parentElement.children[3].value;
    let number = this.event.target.parentElement.children[1];
    console.log("Максимальное кол-во книг ", maxKol);

    Math.sign(number.value) === -1 || Math.sign(number.value) === 0 ? number.value = 0 : number.value = number.value;
    if (number.value > maxKol) { number.value = maxKol}
}



