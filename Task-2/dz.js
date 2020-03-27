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
    case 'декабрь':
        console.log('Зима'); 
    case 'январь':
        console.log('Зима');
    case 'февраль':
        console.log('Зима');
        break;
    case 'март':
        console.log('Весна');
    case 'апрель':
        console.log('Весна');
    case 'май':
        console.log('Весна');
        break;
    case 'июнь':
        console.log('Лето');
    case 'июль':
        console.log('Лето');
    case 'август':
        console.log('Лето');
        break;
    case 'сентябрь':
        console.log('Осень');
    case 'октбярь':
        console.log('Осень');
    case 'ноябрь':
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не бывает');
}