/* Функция generateField(n) по генерации игрового поля размером n x n.
Значение n не может быть меньше 3.
Для 3х ячеек поля(для выбора конкретной ячейки использовать random)
добавить атрибут prise.Значения атрибута prise устанавливаются из массива.
    Для 1й ячейки значение атрибута prise = "cat",
        для 2й ячейки значение атрибута prise = "book",
            для 3й ячейки значение атрибута prise = "car"*/
let Fields = {
    cat: {
        title: "Кот",
        img:"img/cat.jpg"
    },
    book: {
        title: "Книга",
        img:"img/book.jpg"
    },
    car: {
        title: "Машина",
        img: "img/car.jpg",
    }
}
const BOTTON_ARR = document.getElementById('btn');
let section = document.querySelector(".GameField");
BOTTON_ARR.addEventListener('click', generateField.bind(Fields));

const OBJARR = Object.entries(Fields);


//Создание массива x*x
let createArray=(n) => {
    console.log(Number.isInteger(n));
    if (!Number.isInteger(n)) n = 3; // Если не числовое значение, то значене n=3 (по условию кол-ва ячеек)
    if (n < 3) n = 3;

    let x = 0; // Счетчик, который будет заносится в каждую ячейку массива

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = ++x;
        }
    }
    return arr;
};

function generateField(Object) {
    let cell__grid = document.getElementsByClassName('GameField')[0]; // Получаем первый элемент
    let count = document.getElementById('btn__arr').value;

    while (cell__grid.firstChild) {
        cell__grid.removeChild(cell__grid.firstChild);
    }

    //Создали матрицу  х*х
    arr = createArray(Number(count));

    //Задали 3 ячейки рандом
    let arrAtribute = [];
    for (let key in Object) {
        arrAtribute.push(randomInteger(1, count * count));
    }


    //Оформляем GRID

    cell__grid.style.cssText = `
        grid-template-columns: repeat(${count},1fr);
        grid-template-rows:  repeat(${count},1fr);
   `;

    //Добавляем ячеки
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            let div = document.createElement('div');

            for (let item in Object) {
                if (arrAtribute.indexOf(arr[i][j]) == 2) {
                    let title = document.createElement("h2");
                    title.innerText = Object[item].title;
                    let pic = document.createElement("img");
                    pic.setAttribute("src", Object[item].img);
                    div.setAttribute("prise", "car");
                    div.append(title, pic);
                    break;
                }
                else if (arrAtribute.indexOf(arr[i][j]) == 1) {
                    let title = document.createElement("h2");
                    title.innerText = Object[item].title;
                    let pic = document.createElement("img");
                    pic.setAttribute("src", Object[item].img);
                    div.setAttribute("prise", "book");
                    div.append(title, pic);
                    break;
                }
                else if (arrAtribute.indexOf(arr[i][j]) == 0) {
                    let title = document.createElement("h2");
                    title.innerText = Object[item].title;
                    let pic = document.createElement("img");
                    pic.setAttribute("src", Object[item].img);
                    div.setAttribute("prise", "cat");
                    div.append(title, pic);
                    break;
                }
            }

            cell__grid.append(div);
        }
    }
}





/*function generateField(object, section, max) {
    //let n = randomInteger(3, max);
    let n = max;
    section.style.cssText = `
        grid-template-columns:repeat(${n},1fr);
        grid-template-rows:repeat(${n},1fr);`
        ;
    for (let i = 0; i < max * max; i++) {
        for (let item in object) {
            let block = document.createElement("div");
            let title = document.createElement("h2");
            title.innerText = object[item].title;
            let pic = document.createElement("img");
            pic.setAttribute("src", object[item].img);
            // В наш блок div добавили заголовок и картинку
            block.append(title, pic);
            // Добавили уже в самый верхний блок grid всё его содержимое
            section.appendChild(block);
        }
       // section.appendChild(block)[i];
    }
   // section.дочерние_элементы[рандомный_индекс]
}   */

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    min = Math.ceil(min); // Округление до ближайшего большего целого
    max = Math.floor(max); // Округление до ближайшего меньшего целого
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


//generateField(Fields, section, 5);