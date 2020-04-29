class Validator {
    static setFormAndSettings(form, setting) {
        return new Validator(form, setting);
    }
}

// логин : от 3 до 7
// пароль: от 5

// при потере фокуса:
// сразу проверять введегнные данные и сообщать об ошибке / успехе

// при нажатии на кнопку type=submit:
// в случае успешного заполншения - вызов success функции
// в случве заполнения с ошибками - вызов error функции
let submitSuccess = () => {
    console.log("Даннные можно отправить на сервер")
}
let submitError = () => {
    console.log("Даннные нельзя отправить на сервер")
}
let settings = {
    login: { // значения атрибута name
        rules: { // правила
            requiered:true, // поле обязательно для заполнения
            minLenghth: 3, // мин. длина
            maxLenghth: 7 // макс. длина
        }
    },
    password: { // password - значение атрибута name
        rules: {
            requiered: true,
            minLenghth:5
        }
    }
};
Validator.setFormAndSettings(document.forms.validator.settings)
    .setSubmitSuccess(submitSuccess)
    .submitError(submitError)
    .run();
