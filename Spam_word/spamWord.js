/* Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова.
Определить по 5-ти бальной шкале, насколько часто в тексте встречается спам.
Результат вернуть из функции */

let text = prompt("Введите предложение, которое бы включало спам слова");
let spam = prompt("Введите спам слово");
console.log(`${text}`);
console.log(`Спам-слово ${spam}`);

function spamTest(text, ...spamWord) {
    let lowerText = text.toLowerCase();
    textArr = lowerText.split(' '); // загнали строчку в массив
    let counter = 0;
    for (let i = 0; i < textArr.length; i++) {
        spamWord.forEach(function (element) {
            if (element === textArr[i]) { counter++; }
        });
    }
    console.log(`В тексте встречается ${counter} раз спам-слово ${spamWord}`)
}
spamTest(text, spam);
