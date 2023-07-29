function revealWords(neededWords, text) {
    let wordsArr = neededWords.split(", ");
    let textArr = text.split(" ");
    for (let word of wordsArr) {
        for (let el of textArr) {
            let index = textArr.indexOf(el)
            if (el.startsWith("*") && el.length === word.length) {
                textArr[index] = word;
            }
        }
    }
    console.log(textArr.join(" "));
}
revealWords('great',

'softuni is ***** place for learning new programming languages')