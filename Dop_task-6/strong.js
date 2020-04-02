/* Найдите самое длинное слово в предложении, 
 * при условии, что в предложении все слова разной длины. */

let sentence = prompt('Введите предложение');
let rez;
let max = 0;
console.log(sentence);

sentence = sentence.trim().split(" "); // Разбиваем предложение на массив из слов, знак отделения " "
for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i];
    console.log(sentence[i].length);
    if (sentence[i].length > max) {
        rez = sentence[i];
        max = sentence[i].length;
    }
}
console.log(rez);