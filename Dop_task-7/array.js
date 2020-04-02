/* Дана строка, которая содержит буквы и числа, например, "улица Ломоносова дом 9 корпус 1 офис 1120". 
 * Необходимо создать массив, элементы которго будут числа строки, 
 * например для данной строки массив будет вида [9, 1, 1120] */

let str = "улица Ломоносова дом 9 корпус 1 офис 1120";
let array = str.split(" ");
let rez = [];
let j = 0;
console.log(str);
for (let i = 0; i < array.length; i++) {
    //console.log(array[i] + ' - ' +isNaN(array[i]));
    if (isNaN(array[i]) === false) {
        rez[j] = array[i];
        j++;
    }
}
console.log(rez);