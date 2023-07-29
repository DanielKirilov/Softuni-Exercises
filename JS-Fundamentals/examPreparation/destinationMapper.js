function destinationMapper(data) {
    let pattern = /([\/=])(?<word>[A-Z][A-Za-z]{2,})\1/gm;
    let matches = data.matchAll(pattern);
    let words = [];
    let points = 0;

    for (let match of matches) {
        let word = match.groups["word"]
        let lengthOfWord = word.length;
        points += lengthOfWord;
        words.push(word);
    }
    if (words.length >= 1) {
        let wordsStr = words.join(", ");
        console.log(`Destinations: ${wordsStr}`);
    }
    else {
        console.log("Destinations:");
    }
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");