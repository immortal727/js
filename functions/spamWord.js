let spam = "спам";
let text = " акой-нибудь текст";
function spamTest(text, ...spaWord) {
    let lowerText = text.toLowerCase();
    textArr = lowerText.split(' '); // загнали строчку в массив
    let counter = 0;
    for (let i = 0; i < textArr.length; i++) {
        spaWord.forEach(function (element) {
            if (element === textArr[i]) { counter++; }
        });
    }
}
spamTest(text, spam);
