function pascalCaseSplitter(text) {
    let result = [];
    let startIndex = 0;
    for (let i = 1; i < text.length; i++) {
        let ch = text[i];
        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            result.push(text.substring(startIndex, i));
            startIndex = i;
        }
    }
    result.push(text.substring(startIndex, text.length))
    console.log(result.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('can')