const BUIDL_ARR = document.getElementById('build__arr');

BUIDL_ARR.addEventListener('click', generateField)

let homeObject = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
};

//Создаем массив x*x
let createArray = (n) => {

    //console.log(Number.isInteger(n))

    if (!Number.isInteger(n)) n = 3;

    if (n < 3) n = 3;

    let x = 0;

    arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = ++x;
        }
    }
    return arr;
};

//
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function generateField() {

    let cell__grid = document.getElementsByClassName('cell__grid')[0];

    while (cell__grid.firstChild) {
        cell__grid.removeChild(cell__grid.firstChild);
    }

    let count = document.getElementById('build__arr-n').value;

    //Создали матрицу  х*х
    arr = createArray(Number(count));
    console.log(arr);

    //Задали 3 ячейки рандом
    let arrAtribute = [];
    arrAtribute.push(getRandomIntInclusive(1, count * count));
    arrAtribute.push(getRandomIntInclusive(1, count * count));
    arrAtribute.push(getRandomIntInclusive(1, count * count));

    //  console.log(arrAtribute);

    //Оформляем GRID

    cell__grid.style.cssText = `
  display: grid;
  border: 2px solid red;
  margin: 0 auto;
  grid-template-columns: repeat(${count},1fr);
  grid-template-rows:  repeat(${count},1fr);
   `;

    //Добавляем ячеки
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            let div = document.createElement('div');

            div.style.cssText = `
        width: 100%;
        height: 50px;
        border: 1px solid red;
        text-align: center;
      `;


            if (arrAtribute.indexOf(arr[i][j]) == 2) {
                div.innerText = homeObject.car;
                div.setAttribute("prise", "car");
            }
            else if (arrAtribute.indexOf(arr[i][j]) == 1) {
                div.innerText = homeObject.book;
                div.setAttribute("prise", "book");
            }
            else if (arrAtribute.indexOf(arr[i][j]) == 0) {
                div.innerText = homeObject.cat;
                div.setAttribute("prise", "cat");
            }



            cell__grid.append(div);

        }

    }

}




/*
Дан объект {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
}
Написать функцию generateField(n) по генерации игрового поля размером n x n.
Значение n не может быть меньше 3.
Для 3х ячеек поля (для выбора конкретной ячейки использовать random)
добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
Для 1й ячейки значение атрибута prise="cat",
для 2й ячейки значение атрибута prise="book",
для 3й ячейки значение атрибута prise="car"
*/