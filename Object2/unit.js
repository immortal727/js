// Старый способ создания классов

function Unit(name) {
    // свойства (условно приватные)
    this._health = 10;
    this._attack = 3;
    this._name = name;
    // приватные свойства
    // let privateProp = "Приватное свойство";
}

// Unit.prototype[isAlive]

// описание методов
Unit.prototype.isAlive = function () {
    return this._health > 0;
};

let unit1 = new Unit("Алеша");
unit1._health = 90;
unit1.isActive();
let unit2 = new Unit("Кеша");
unit2._health = 50;
unit2.isActive();