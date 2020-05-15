// Подключаем css или sass файлы
import "../css/style.css";
import {Book} from "./book";

let book = new Book ("Война и мир", "Толстой", 220);
document.body.append(document.createTextNode(book.printInfo()));
console.log(jQuery('a'));