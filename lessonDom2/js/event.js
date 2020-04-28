let titleElems = document.querySelectorAll(".article p:first-child");
console.log(titleElems);

// 1. Опеределиться элемент на котором должно произойти событие
// 2. Что за событие должно произойти
// 3. Что должно быть при собитии

for (let elem of titleElems) {
    console.log(elem);
    // Добавление обработчика события click каждому элементу p
    // обработчик события - функция, в которой описывается реакция на событие
    // данная функция будет вызвана при наступлении события!

    // 1 вариант: addEventListener(название события, название функции обработчика)
    elem.addEventListener("click", openDescription); // обработчик события
}

// фукнция, которая будет вызвана при нажатии мыши на элементе p
function openDescription() {
    console.log("openDescription", this);
    // this - контекст вызова функции 
    // В случае обработки событий - тот эллемент, на который повешен обработчик
    this.nextElementSibling.classList.toggle("open");
    // К классам соседа nextElementSibling вызываем метод toogle
}

// Атрибут datа-* используется для передачи пользовательских данных из 
// html в js.
// data-название_прикрепляемых_данных="данные"
// получение на js: эдемент.dataset.название_прикрепляемых_данных;
let getPresent = () => { // ключи соответствуют значениям атрибута Data-present
    return {
        car: "Машина",
        dog: "Собака",
        book: "Книга"
    }
};
// Получим элемент-контейнер по id
let presentContainer=document.getElementById("present_container");
console.log(presentContainer);
// добавим обработчик события на presentContainer
presentContainer.addEventListener("click", showPresent);
function showPresent() {
    console.log("showPresent", this);
    console.log("инормация о событии", event);
    // this - элемент, на который был повешен обработчик
    // event.target - элемент, на котором произошло событие
    console.log("инормация о событии", event.target);
    let clickElem = event.target; // любая область внутри presentContainer на которой был клик
    // получим значение атрибута data-present
    let present = clickElem.dataset.present;
    console.log("present=" + present);
    // если событие произошло на p - получим значение атрибута, 
    // в противном случае undefined
    if (present) {
        clickElem.innerText = getPresent()[present];
        clickElem.classList.add("present");

        // удаление обработчика события: 
        // removeEventListener(аргументы, которые были указаны при его добавлении)
        this.removeEventListener("click", showPresent);
    }
}

window.addEventListener("scroll", fixMenu);
let fixedBlock = document.getElementById("fixed");
let fixedBlockOffse = fixedBlock.getBoundingClientRect().top; //отступ сверху
console.log("fixedBlock", fixedBlock, fixedBlockOffse);

function fixMenu() {
    console.log("прокрутка " + window.pageXOffse);
    if (window.pageYOffset > fixedBlockOffse) {
        fixedBlock.classList.add("fixed");
    } else {
        fixedBlock.classList.remove("fixed");
    }
}