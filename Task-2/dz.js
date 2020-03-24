// Задание 2
/* Дана переменная month (название месяца), в зависимости от названия месяца вывести в косоль:
    декабрь / январь / февраль  -> console.log("зима")
    март / апрель / май  -> console.log("весна")
    июнь / июль / август  -> console.log("лето")
    сентябрь / окрябрь / ноябрь  -> console.log("осень")  */
//let month = ['Январь', 'Февраль', 'Март', 'Арпель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let month = prompt('Введите месяц года');
month = month.toLowerCase();
switch (month) {
    case month = 'декабрь':
        console.log('Лето'); 
    case month = 'январь':
        console.log('Зима');
    case month = 'февраль':
        console.log('Зима');
        break;
    case month = 'март':
        console.log('Весна');
    case month = 'апрель':
        console.log('Весна');
    case month = 'май':
        console.log('Весна');
        break;
    case month = 'июнь':
        console.log('Лето');
    case month = 'июль':
        console.log('Лето');
    case month = 'август':
        console.log('Лето');
        break;
    case month = 'сентябрь':
        console.log('Осень');
    case month = 'октбярь':
        console.log('Осень');
    case month = 'ноябрь':
        console.log('Осень');
        break;
    
    default:
        console.log('Такого месяца не бывает');
}