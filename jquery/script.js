// библиотека jQuery - набор методов для работы с DOM деревом
jQuery(function () {
    // Использование $ менее предпочтительней во избежание конфликтов
    // Рекомендуется все же полностью писать jQuery

    // методы jQuery делятся на те, что возвращают
    // преобразованный jQuery объект и те,
    // что возвращают какую-то информацию / ничего не возвращают
    /*jQuery(селектор)
        .someMethod1()
        .someMethod2()
        .someMethod3()
        .someMethod4();
    let text = jQuery(селектор).text();*/

    // получили четные tr:even и исключаем первый tr:first-child
    // not - кроме
    jQuery("#table tr:even")
        .not("#table tr:first-child")
        .css('background', 'orange');
    // если нечетные - то нужно tr:odd
    jQuery("#table tr:odd")
        .css('background', 'yellow');
    jQuery("#table tr:first-child")
        .css('background', 'red');

    // атрибуты
    let table = jQuery("#table");
    // элменту с id=table добавить атрибут со значением 1
    table.attr('some-attr', 1);
    // возвращает значение id элемента с id=table
    console.log(table.attr('some-attr'))
    // удаляем значение id элемента с id=table
    table.removeAttr('some-attr');
    table.attr('border', 1);

    let cardsDiv = jQuery("#cards div");
    // last  - последний элемент из набора
    cardsDiv.last().css('border-bottom', '2px solid black')
        .end() // вернет нас к началу, т.е. к исходному элементу cardsDiv
        .first() // первый элемент
        .css('border-top', '2px solid black')

    // обработчик событий
    cardsDiv.on('click', function () {
        // this -> div в #cards - элемент html!!!
        // элемент на котором произойдет клик
        console.log(this);
        // объект JQuery
        jQuery(this).text(this.dataset.present.toUpperCase());
        // возвращает текст
        console.log(jQuery(this).text());
        if (jQuery(this).data("present") === 'pig') {
            jQuery(this).css('background', 'pink');
        }
        else {
            jQuery(this).css('background', 'yellowgreen');
        }
        // удалили обработчики событий со всех div в #cards
        cardsDiv.off();
    });

    // one - срабатоает событие только один раз
    jQuery('#cards_info').one('click', function () {
        console.log('one on #cars_info');
        cardsDiv.each((index, elem) => {
            if (jQuery(elem).text() !== 'Подарок') {
                jQuery('#cards_info h5')
                    .after(`<p>Ваш подарок ${jQuery(elem).data('present').toUpperCase()}</p>`);
            }
            else {
                jQuery(this).append(`<p>Вы могли получить ${jQuery(elem).data('present').toUpperCase()}</p>`)
            }
        })
    });

    let info = jQuery('#info');
    // все p внутри элемента с id=info
    let infoP = info.find('p');
    // Все стили, которые идут через тире (-)
    // второе слово должно начинаться с заглавной буквы
    // и без -
    // К примеру fontStyle, borderTop, marginBottom и т.д.
    infoP.css({
        color: '#082567',
        fontStyle: "italic"
    });
    info.find('h2').css('color', function (ind, oldVal) {
        // oldVal - текущее значения свойства color
        if (oldVal === 'rgb(0,0,0)') return '#ed9121';
    });

    // высота и ширина
    let colorDiv = jQuery('#color_div');
    colorDiv.css('background', 'yellowgreen')
        .width('100%')
        .height(200); // когда значение в px - кавычки не нужны
    console.log(colorDiv.width()); // получили ширину
    console.log(colorDiv.height()); // получили высоту

    jQuery('#info h2').click(function () {
        // siblings - родительские элементы
        jQuery(this).siblings().toggle('slow', () => {
            console.log("toogle finished");
            if (this.display) {
                colorDiv.html(`<h2>Вы открыли ${$(this).text()}`)
            } else {
                colorDiv.html(`<h2>Вы закрыли ${$(this).text()}`)
            }
            this.display = !this.display;
        })
       //  jQuery(this).siblings().hide(); // скрытие
       //  jQuery(this).siblings().show(); // открытие
    })
    // li в nav, внутри которых есть элементы с классом submenu
    let liWitchSubmenu = jQuery('nav li').has('.submenu');
    liWitchSubmenu.find('ul').hide();
    liWitchSubmenu.on('click', function() {
        jQuery(this).children().toggle('slow');
    })

    let animation = jQuery("#animation p");
    let change = jQuery('#change');
    animation.first().click(function () {
        change.animate({
            fontSize: '+=16px'
        }, 1000, function () {});
    });
    animation.last().click(function () {
        change.animate({
            fontSize: '-=16px'
        }, 1000, function () { });
    });
})