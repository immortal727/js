let defaultImg = "/img/avatar.png";
let currentDate = new Date();

console.log(`Число ${currentDate.getDate()}, Месяц ${currentDate.getMonth()},
Год ${currentDate.getFullYear()}`);
console.log(`Время ${currentDate.getHours()}:${currentDate.getMinutes()}`);

let button = document.querySelector("input[type=button]");
let answer = document.querySelector("answer");
let textAnswer=document.querySelector("textarea");
button.addEventListener("click",Comment );
function Comment() {
    let arrAvtor = [];
    console.log('textAnswer.lenght');
    textAnswer = textAnswer.value.trim(); // убираем лишние пробелы
    if (textAnswer != "") {
        let user = { name: 'Dmitriy', textAnswer: textAnswer.value };
        arrAvtor.push(user);
        let img = document.createElement('img');
        img.setAttribute("src", defaultImg);
        let p = document.createElement('p');
        p.innerText = "Гость";
        let commentP = document.createElement("p");
        commentP = textAnswer;
        let commentDiv = document.createElement("div");
        commentP = textAnswer;
        commentDiv.append(img, p, commentP);
        answer.append(commentDiv);
    }  
}

