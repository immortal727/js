class Validator {
    // валидатор может обрабытывать текстовые поля на:
    // required / minLength / maxLength
    _errors = 0;

    _messages = {
        minLength: "Минимум:",
        maxLength: "Максимум:",
        required: "Поле обязательно для заполнения"
    };

    constructor(form, rules) {
        this._form = form;
        this._settings = rules;
    }
    required(inputValue) {
        return inputValue.length > 0;
    }

    minLength(inputValue, rule) {
        return inputValue.length >= rule;
    }

    maxLength(inputValue, rule) {
        return inputValue.length <= rule;
    }

    validateField(elem, elemRules) {
        // elem - проверяемый элемент
        // elemRules - объект с правилами для проверки
        // пользовательского ввода
        for (let rule in elemRules) {
            // для login
            // required / minLength / maxLength
            if (!this[rule](elem.value, elemRules[rule])) {
                // this.required() / this.minLength()
                // this.maxLength()
                elem.nextElementSibling.innerText =
                    `${this._messages[rule]} ${elemRules[rule]}`;
                this._errors += 1;
                return;
            }
            if (this._errors > 0) this._errors -= 1;
            elem.nextElementSibling.innerText =
                "Поле заполнено верно";
        }
    }
    // метод должен быть вызван, при событии submit
    submitValidate(event) {
        event.preventDefault();
        for (let elem of this._form.elements) {
            if (elem.dataset.validate) {
                this.validateField(elem,
                    this._settings[elem.dataset.validate]);
            }
        }
        if (this._errors === 0) this._successFunc();
        else this._errorFunc();
    }
    // метод должен быть вызван, элемент!!! теряет фокус
    blurValidate(elem, elemRules) {
        this.validateField(elem, elemRules);
    }

    initSubmit() {
        this._form.addEventListener("submit",
            this.submitValidate.bind(this));
    }

    initBlur() {
        for (let elem of this._form.elements) {
            if (elem.dataset.validate) {
                elem.addEventListener("blur",
                    this.blurValidate
                        .bind(this, elem, this._settings[elem.dataset.validate]));
            }
        }
    }

    run() {
        this.initBlur();
        this.initSubmit();
    }

    setSuccess(successFunc) {
        // создает свойство _successFunc, устанавливает значение
        this._successFunc = successFunc;
        return this; // возвращает ссылку на текущий объект
    }
    setError(errorFunc) {
        // создает свойство _errorFunc, устанавливает значение
        this._errorFunc = errorFunc;
        return this; // возвращает ссылку на текущий объект
    }

    static setForm(form, rules) {
        // создает объект и возвращает ссылку на этот объект
        return new Validator(form, rules);
    }
}