// кровме вариантов получения элементов из lesson6,
// элементы формы можно получать через значение
// атрибута name
let form = document.forms.lesson; // lesson - значение атрибута name
console.log(form);

// доступ к элементам формы form по значению атрибута name
// form.elements - все элементы формы form
let loginInput = form.elements.login;
// login - значение атрибута name элемента input
console.log(loginInput);

// Получение и установка значения (атрибут value)
console.log(loginInput.value);
loginInput.value = "qwe";

// получим элемленты со значением атрибута name=color
let colorRadio = form.elements.color;
console.log(colorRadio);
// colorRadio коллекция, т.к. в форме несколько элементов с name=color

// повесить облработчик события на кажду радиокнопку
// событие - focus
// Функция changeColor()
for (let radio of colorRadio) {
    radio.addEventListener("focus", changeColor);
}
// Если это коллекция, как радиокнопки, то мы должны получать
// элементы коллекции, поэтому делается цикл

function changeColor() {
    form.elements.checkbox_fieldset
        .style.background = this.value;
}
// значения атрибутов name чекбоксов ==lang[],
// поэтому обращение через точку не подойдет и нужно
// использовать []
let langArr = form.elements["lang[]"];
console.log(langArr);
// у чекболксов и радиокнопок есть атрибут cheked
// на js мы можем получить знаение этого атрибута
// через свойство elem.cheked
for (let cb of langArr) {
    if (cb.checked) {
        console.log(cb.value);
    }
}

// Выпадающий список
let countries = form.elements.countries;
console.log(countries);
// у option есть атрибут Selected, 
// на js мы можем получить значение данного атрибута
// через свойство elem.selected
for (let elem of countries) {
   // console.log(elem);
    if (elem.selected) {
        console.log(elem.value);
    }
}
// при переборе коллекци optgroup откидывается и выпадают все option

// отправка формы (нажатие на кнопку с типом submit)
// событие формы!!! submit
form.addEventListener("submit", takeForm);
function takeForm(event) {
    // по умолчанию данные формы сразу отправлются на сервер
    event.preventDefault(); // отмена события по умолчанию
    console.log('ОБработка формы на js');
    // значение атрибута value (пользовательский ввод)
    // элемента формы с name=login
    console.log(this.elements.login.value);
    for (let elem of countries) {
        if (elem.selected) {
            console.log(elem.value);
        }
    }

    // объект типа FormData собирает все данные HTML формы
    // используется для отправки данных на сервер
    // хранит данные в формате:
    // значение атрибута name - значение атрибута value
    let formData = new FormData(this);
    console.log(formData.get("login")); // возвращает значение атрибута value 
    // по значению атрибута name
    console.log(formData.getAll("lang[]"));
    // удаление поля с заданным именем
    formData.delete("pwd");
    //
    formData.append("some_field", "some value");

    for (let data of formData.entries()) {
        console.log(data);
        console.log("key " + data[0]);
        console.log("value " + data[1]);
    }
}

// form.addEventListener("reset", resetHandler);
LoginInput = form.elements.login;
// Когда пользователь закончил ввод - потеря фокуса (blur), проверять
// введенные им данные и сразу сообщать об ошибке / успехе
loginInput.addEventListener("blur", focusOutElem);
function focusOutElem() {
    console.log("потеря фокуса на input");
    if (this.value.lenght < 3) {
        this.nextElementSibling.classList.add("error");
    }
    else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}
loginInput.addEventListener("focus", focusOnElem);
function focusOnElem() {
    console.log("фокус на login Input");
    this.classList.add("success");
}

