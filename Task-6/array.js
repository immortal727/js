/*Дан массив['dog', 'cat', 'rabbit', 'mouse'].
Удалить из массива элемент со значением 'cat' */

let mas = ['dog', 'cat', 'rabbit', 'mouse'];
for (let i = 0; i < mas.length; i++) {
    if (mas[i]==='cat') {
        mas.splice(i, 1);
    }
}
console.log(mas);