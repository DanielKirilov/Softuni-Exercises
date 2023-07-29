function wordsUpperCase(text) {
    let pattern = /\w+/gm;
    let matches = text.matchAll(pattern);
    let result = [];
    for (let match of matches) {
        let word = match[0].toUpperCase();
        result.push(word);
    }
    console.log(result.join(", "));
}
wordsUpperCase('Hi, how are you?')