function countStringOccurrences(text, word) {
    let searchArr = text.split(" ");
    let count = 0;
    for (let element of searchArr) {
        if (element === word) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')