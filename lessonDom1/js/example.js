let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: "https://picsum.photos/id/162/300"
    }
};
function generateCards(cardsData, cardsElem) {
 /*   cardsData - объект с товарами
    cardsElem - элемент, в кторый будут добавляться
    сформированные карточки товаров */
    for (let item in cardsData ) {
        // на каждой итерации в перемунню item копируется
        // объект - отдельный товар
        let card = document.createElement("div");
        card.classList.add("card"); // добавление класса card к элементу div
        let title = document.createElement("h2");
        title.innerText = cardsData[item].title;
        let pic = document.createElement("img");
        pic.setAttribute("src", cardsData[item].img);
        // Цена: ...
        let price = document.createElement("p");
        price.innerText = `Цена: ${cardsData[item].price}`;
        // в элемент div добавляем h2, img и p
        card.append(title, pic, price);
        // Добавили элемент div (со всем его содержимым)
        // в CardsElem
        cardsElem.append(card);
    }
}
let section = document.querySelector(".goods");
generateCards(goods, section);

let slider = {
    init: function (id) {
        // в объекте slider создается свойство cliderContainer
        // со значением - объект html, полученный по id
        this.cliderContainer = document.getElementById(id);
        // со значением - элементы слайдера (список li)
        this.slides = this.cliderContainer.children;
        // индекс текущего (отображаемого слайда)
        this.currentSlide = 0;
    },
    nextSlide: function () {
        // логика переключения слайдов
        if (this.currentSlide || this.currentSlide === 0) {
            this.slides[this.currentSlide].classList.remove("active");
            this.currentSlide++;
        }
        this.currentSlide = this.currentSlide < this.slides.length ? this.currentSlide : 0;
        this.slides[this.currentSlide].classList.add("active");
        console.log(this.currentSlide);
    },
    run: function(){
         // запуск метода NextSlide
        this.nextSlide();
        // setInterval(func, time);
        setInterval(this.nextSlide.bind(this), 1000);
    }
};
slider.init("slider");
slider.run();