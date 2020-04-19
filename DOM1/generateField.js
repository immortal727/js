let Fields = {
    cat: {
        title: "Кот",
        img:"img/cat.jpg"
    },
    book: {
        title: "Книга",
        img:"img/book.jpg"
    },
    car: {
        title: "Машина",
        img: "img/car.jpg",
    }
}

function generateField(object, section, max) {
    let n = randomInteger(3, max);
    section.style.cssText = `
        grid-template-columns:repeat(${n},1fr);
        grid-template-rows:repeat(${n},1fr);`
        ;
    for (let i = 0; i < max; i++) { 
        
        for (let item in object) {
            let div = document.createElement("div");
            let title = document.createElement("h2");
            title.innerText = object[item].title;
            let pic = document.createElement("img");
            pic.setAttribute("src", object[item].img);
            div.append(title, pic);
            section.appendChild(div);
        }
        
    }
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let section = document.querySelector(".GameField");
generateField(Fields, section, 5);