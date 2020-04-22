/* Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
 * При нажатии на заголовок ячейки должна происходить сортировка по соответствующему столбцу:

заголовки ячеек: навание свойств объекта
сами ячейки: значения свойств объекта
Например, для массива goods из файла lesson6 / js / foHw.js таблица будет следующего вида:
TITLE     PRICE   COUNT
Пианино    3000     25
Гитара     1200     40
Барабаны   2700     12
и тд
Вывод после нажатия на COUNT:
TITLE     PRICE   COUNT
Барабаны   2700     12
Пианино    3000     25
Гитара     1200     40
и тд
*/
let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];
function generateTable(object) {
    let tableArea = document.getElementById("blockProducts");
    let table = document.createElement("table");
    table.classList.add("table_sort");
    // заголовок
    let caption = table.createCaption();
    caption.innerText = "Товары нашего магазина";
    
    table.setAttribute("border", 1);
    let counter = 0;
    for (let item in object) {
        counter++;
    }
   
    for (i = 0; i < object.length; i++) {
        for (let item in Object.keys(object[i])) {
            if (Object.keys(object[i])[i] != undefined) {
                let th = document.createElement("th");
                th.innerText = Object.keys(object[i])[i];
                table.append(th);
                break;
            }  
        }
    }
    
    for (i = 0; i < object.length; i++) {
        // ряд
        let row = table.insertRow(i);
        
        for (let item in object[i]) { // начинаем перебирать объект 
            let cell = row.insertCell();
            cell.innerText = object[i][item];
            
        }
        
    }
    
    tableArea.append(table);
}

generateTable(goods); // генерация таблицы с товарами


