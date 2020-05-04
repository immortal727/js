class Fermer {
    _quantity = 10;
    _resource = 5; // Первоначальное значение единиц ресурсов фермера
    _prognal = false;
    constructor(name) {
        this._name = name; // имя фермера
        this._driveAway = 0; // Счетчик диких животных, сколько смог прогнать фермер
    }

    collection(otherAnimal) { // Сбор ресурсов с животных
        if ((otherAnimal instanceof Animals) || otherAnimal._sourceAnimal!=0) {
            _resource++; // Фермер восполняет свои ресурсы
            otherAnimal._sourceAnimal--; // Ресурсы животного уменьшаются на 1-ку
        }
    }

    eat(otherAnimal) {
        if (!(otherAnimal instanceof Animals) && otherAnimal._edible === false) {
            throw new Error("Фермер не сможеть съесть чужое животное");
        } else if (this._resource === 0) {
            this._resource += otherAnimal._sourceAnimal;
            otherAnimal._health = 0;
        }
        else console.log(`${otherAnimal._nameAnimal} нельзя съесть`);
    }

    drive_away(otherAnimal) { // Фермер прогоняет другое животное
        if (!(otherAnimal instanceof Animals) || this._driveAway <= 3) {
            if (_random.randomInteger(0, 1) === 1) {
                _prognal = true;
                this._driveAway++;
                this._resource--; // Затрачивает свои силы (ресурсы)
            }
            wildAnimal.attack(otherAnimal); // Атака дикого животного удалась
        }
    }
    feed(otherAnimal) {
        if (otherAnimal instanceof Animals) { // Если животное самого фермера
            this._feed = true; // Покормил животное
            otherAnimal.eat(); // Животное восполняет здоровье при кормлении
        } 
    }
}

class Animals {
    _weight = 30; // вес животного
    _speed = 5; // скорость км/ч
    _health = _weight; // здоровье (из рассчета 1 кг животного 1 ресурс)
    _sourceAnimal = 3; // кол-во ресурсов
    _edible = true; // съедобно/несъедобно
    set source(sourceAnimalValue) {
        if (sourceAnimalValue < 0) {
            throw new Error("Здоровье животного не может быть меньше 0");
        }
        this._sourceAnimal = sourceAnimalValue;
    }
    get source() {
        return this._sourceAnimal;
    }

    constructor(name) {
       this._nameAnimal = name;
       this._animals = []; // массив для животных
    }
    escape(otherAnimal){ // Животное убежало
        if (!(otherAnimal instanceof Animals) || otherAnimal._speed < this._speed) {
            _health--; // Было совершено нападение, а значит отнимаем 1-ку здоровья
            console.log(`${this._nameAnimal} смогло убежать от дикого животного`)
        } else {
            console.log(`${this._nameAnimal} было убито диким животным`);
        }
    }
    eat() { // Животное ест
        if (this._health < _health) {
            this._health++; // Животное восполняет здоровье
        }
    }

    addAnimal(animal) {
        this.this._animals.push(animal);
    }
}

class Cow extends Animals{ // Корова
    _edible = false;
    constructor() {
        _weight = 50;
        _speed = 2; 
        _sourceAnimal = 7;
    }
}

class wildAnimal extends Animals { // дикое животное
    _edible = false;
    _kill = false;
    attack(otherAnimal) {
        if (!(otherAnimal instanceof Animals)) {
            throw new Error("Дикие животные не могут нападать друг на друга");
        } else if (_rand.randomInteger(0, 1) === 1) {
            _kill = true; // дикое животное убило домашнее
        } else {
            otherAnimal.escape() // домашнее животное убежало
            otherAnimal._health--;
        }
    }
}

class Farm {
    constructor(...animals) {
        this._animals = animals;
        this._age = 1; // День на ферме
    }
    passDay() {
        this._age += 1;
        // Фермер тратит две единицы ресурсов
        Fermer._resource = Fermer._resource - 2;
        if (Fermer._resource === 0) {
            console.log("Игра закончилась");
        }

        for (let index of 10) { // Создаем массив из 10 элементов
            // Если здоровье животного 0, удаляем из массива
            if (Animal._health === 0) {
                Animal._animals.splice(index, 1);
            } else if (Animal._animals(index) === '') {
                // Рождение нового животного
                Animal.addAnimal(new Animal());
            }
        }
    }
}


let fermer1 = new Fermer("Дмитрий");

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    min = Math.ceil(min); // Округление до ближайшего большего целого
    max = Math.floor(max); // Округление до ближайшего меньшего целого
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

/* На Ферме есть фермер, домашние животные(и птицы).
Максимальное количество животных(и птиц) на ферме - 10.

Фермер живет за счет ресурсов, собираемых с животных.
Изначально фермер создается с 5 единицами ресурсов.
Фермер должен иметь возможность:
1. собрать ресурсы с домашних животных, которые могут давать ресурсы
2. съесть домашнее животное, которое пригодно в пищу
(когда на ферме не останется животных, которые дают ресурсы).
При этом расчет ресурсов следующий: 1кг животного - 1 единица ресурса
3. прогнать дикое животное, которое пришло на ферму
4. кормить домашнее животное

Домашние животные: Корова, Кот, Курица, Кролик
обладают следующими характеристиками:
имя, вес, скорость, здоровье, количество ресурсов(у каждого свое и 0, если животное на дает ресурс)

Есть домашние животные, которые дают ресурсы: Корова, Курица
Есть домашние животные, которые пригодны в пищу: Кролик, Корова, Курица

Домашнее животное может убежать от дикого животного, если его скорость больше.
Домашнее животное может восполнять здоровье(+1, но не больше изначального).
Животные восполняют здоровье во время кормления(когда их кормит фермер).

Дикие животные:
Волк, Медведь, Лисица.
обладают следующими характеристиками:
имя, вес, скорость, сила
Дикое животное может съесть(либо ранить) домашнее животное, если оно не убежит(необходимо сравнивать скорость зверей).
Если домашнее животное было съедено, то оно не остается на ферме
    (из массива удалять не обязательно, можно использовать какой нибудь флаг, onFarm: true / false)!
Если фермер прогнал дикое животное с фермы 3 раза, то в 4й раз оно не может прийти на ферму.

День на ферме(метод класса Farm passDay):
1. Фермер тратит 2 единицы ресурсов(если ресурсов не осталось, игра заканчивается).
2. Приходит дикое животное(выбирается рандомно из массива с дикими животными), 
   пытается поймать(съесть, либо ранить) домашнее животное (выбирается рандомно).
    Если домашнее животное убежало, дикое уходит ни с чем.
3. Иногда(рандомно) фермер может прогнать дикое животное.
4. Фермер кормит всех животных(животные восполняют здоровье)
5. Фермер собирает ресурсы с животных, с которых можно их собирать.Если таких не осталось, съедает животное,
    пригодное в пищу(если такие остались).*/