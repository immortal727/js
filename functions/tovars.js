let count = 25;
function endingWord(count) {
    if ((Math.floor(count % 10) === 0
        || Math.floor(count % 10 >= 5 && Math.floor(count % 10 <= 9))
    )) {
        console.log(`${count} товаров`);
    }
    if (count % 100 >= 10 && count % 100 <= 20) {
        console.log(`${count}` + " товаров")
    } else if (Math.floor(count % 10 === 1))
        console.log(`${count} товаров`);
    else console.log(`${count} товаров`);
}
endingWord(count);