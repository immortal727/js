let count = 25;
function endingWord(count) {
    if ((Math.floor(count % 10) === 0
        || Math.floor(count % 10 >= 5 && Math.floor(count % 10 <= 9))
    )) {
        console.log(`${count} �������`);
    }
    if (count % 100 >= 10 && count % 100 <= 20) {
        console.log(`${count}` + " �������")
    } else if (Math.floor(count % 10 === 1))
        console.log(`${count} �������`);
    else console.log(`${count} �������`);
}
endingWord(count);