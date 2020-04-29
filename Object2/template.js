// class  - шаблон для будущих объектов
// имя класса - существительное, в единственном числе
// имя класса пишется с большой буквы
// В JS класс - функция!!!
// в JS класс - функция-конструктор + дополнительные возможности

class Unit{
    // свойства
    _attack = 3; // свойство _attack со значением по умолчанию 3
    _health = 10; // свой будет вызван при создании объектов
    constructor(name) {
        // значение свойства _name будет устанавливаться
        // в момент создания объекта
        this._name = name;
    }
    // Сеттеры set указывают на установку значения свойству
    // Установка значений, их проверка
    set attack(attackValue) {
        if (attackValue < 5) {
            throw new Error("атака не может быть меньше 5")
        }
        this._attack = attackValue;
    }
    // Если свойтство записано с нижним подчеркиаванием,
    // (_attack или _health)
    // то по соглашению принято вызывать такие свойства через сеттеры
    // На данный момент свойства можно спрятать, но будут работать не во всех браузерах
    // Для этого надо ставить плагин специальный

    // геттеры
    // get указывает на получение значения свойства
    get attack() {
        return this._attack;
    }

    // Метод (функция внутри) объекта
    // function не пишем, начинаем сразу с названия метода
    isAlive() {
        return this._health < 0;
    }
    // метод (функция внутри) объекта
    attackOther(otherUnit) {
        // instanceof проверяет принадлежность объекта 
        // к типу (классу) Unit. Возвращает true/false
        if (!(otherUnit instanceof Unit)) {
            throw new Error("Юнит не может атаковать " +
                "данного персонажа");
        }
        // аналогично для текущего
        if (!this.isAlive()) {
            console.log(`юинит ${this._name} мертв. Атака бесполезна`);
            return; // завершаем работу метода
        }

        if (!(otherUnit.isAlive())){
            console.log(`юинит ${otherUnit._name} мертв. Атака бесполезна`);
            return; // завершаем работу мметода
        }
        otherUnit._health -= this._attack;
        console.log(`${this._name} атаковал ${otherUnit._name} Здоровье ${otherUnit._name} = ${otherUnit.__health}`);   

    }
}
// создание объектов
let unit1 = new Unit("Иван");
let unit2 = new Unit("Алёша");

console.log(unit1);
console.log(unit2);

// доступ к свойствам осуществляется через точку
// получили значения свойства _name объекта unit1
console.log(unit1._name);
// получили значения свойства _attack объекта unit2
console.log(unit2._attack);
// установили значение свойства _attack объекта unit1
unit1._attack = 3;
unit2._attack = 18;
unit1._health = 15;
unit2._health = 32;

// вызов сеттера attack,
// установка значения свойства _attack
unit1.attack = 6;

// вызо геттер attack
// получение значения свойства _attack
console.log(unit1.attack)

// вызов методов осущеаствляется через точку
unit1.attackOther(unit2);
unit1.attackOther(unit2);
unit2.attackOther(unit1);

// наследование
// Unit класс + доп. свойства и методы
// Класс Knight наследуется (расширяет!!!) от класса Unit
// при этом объекты типа Knight получат все методы и свойства,
// описанные в классе Unit + те, которые описаны в классе Knight
class Knight extends Unit {
    // свойства
    _armor = 1;
    constructor(name) {
        super(name); // вызов конструктора родителя
        this._health = 12;
        this._attack = 7;
        console.log("Создание объект типа Knight");
    }
    set armor(armorValue) {
        if (armorValue < 1) {
            throw new Error("armor не может быть меньше 1");

        }
        this._armor = armorValue;
    }
    get armor() {
        return this._armor;
    }
    // переопределение метода родителя
    attackOther(otherUnit) {
        // вызов метода родител в том виде, 
        // в каком он описан в классе Unit
        super.attackOther(otherUnit);
        // расширение метода родителя (добавление своего функционала)
        otherUnit._health += otherUnit._armor;
    }
}

let knight1 = new Knight("Митя");
let knight2 = new Knight("Кеша");

class Doctor extends Unit {
    constructor(name) {
        super(name); // вызов конструктора родителя Unit
        this._health = 20;
    }
    attackOther(otherUnit) {
        // не используем реализацию родителя
        if (!(otherUnit instanceof Unit)) {
            throw new Error("доктор не может вылечить данного персонажа");
        }
        if (!this.isAlive() || !otherUnit.isAlive()) {
            console.log("Лечение невозможно. Все мертвы");
            return;
        }
        otherUnit._health = +this._attack;
        console.log(`${this._name} вылечил ${otherUnit._name}. Здоровье ${otherUnit._name}=${otherUnit._health}`);
    }
}


// Как можно закрыть доступы к свойствам класса из вне
class PrivateProp {
    #privateProp = 100; // приватное свойство (доступно только в нутри класса)
    _privateProp = 120; // условно приватное

    set PrivateProp(value) {
        this.#privateProp = value;
    }
    get PrivateProp() {
        return this.#privateProp;
    }
    /*#privateVoid() {
        console.log("private void");
    }*/
}

let obj = new PrivateProp();
obj._privateProp = 200;
console.log(obj._privateProp);

//console.log(obj.#privateProp);
//obj.privateProp = 500
//console.log(obj.#privateProp);
//console.log(obj.privateProp); // вызов get privateProp

// оператор static
class UnitsHelper {
    // метод принадлежит классу (не объекуту)
    // для вызова нет необходимости создавать объект
    // Static обычно используется для создания фабричных (методы,
    // которые создают и возвращают объекты) 
    // или утилитарных методов (например, Match.floor())
    static getUnit(unitType, unitName) {
        if (unitType.toLowerCase() === "knight") return new Knight(unitType);
        if (unitType.toLowerCase() === "doctor") return new Doctor(unitType);
    }

    static compareByAttack(unit1, unit2) {
        return unit1.attack - unit2.attack;
    }

    static compareByHealth(unit1, unit2) {
        return unit1._health - unit2._health;
    }
}

let userInput1 = prompt("Введите тип Юнита");
let userInput2 = prompt("Введите тип Юнита 2");

let userUnit1 = UnitsHelper.getUnit(userInput1, userInput2);
let userUnit2 = UnitsHelper.getUnit(userInput1, userInput2);
userUnit2.attackOther(userUnit1);

