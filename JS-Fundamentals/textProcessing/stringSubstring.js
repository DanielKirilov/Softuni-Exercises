function stringSubstring(neededWord, text) {
    let textArr = text.split(" ");
    for (let word of textArr) {
        word = word.toLowerCase();
        if (word == neededWord) {
            console.log(word);
            return;
        }
    }
    console.log(`${neededWord} not found!`);
}
stringSubstring('python',

'JavaScript is the best programming language')