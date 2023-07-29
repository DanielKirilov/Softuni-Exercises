function emojiDetector(data) {
    let text = data.shift();
    let pattern = /([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/gm;
    let digitPattern = /\d+/gm;
    let matches = text.matchAll(pattern);
    let digitMatches = text.matchAll(digitPattern)
    let count = 0;
    let emojis = [];
    let coolNumber = 1;

    for (let digitMatch of digitMatches) {
        let wholeDigit = digitMatch[0]
        for (let digit of wholeDigit) {
        coolNumber *= Number(digit);
        }
    }
    console.log(`Cool threshold: ${coolNumber}`);

    for (let match of matches) {
        let emojiSum = 0;
        for (let char of match.groups["word"]) {
            emojiSum += char.charCodeAt();
        }
        if (emojiSum >= coolNumber) {
            emojis.push(match[0]);
        }
        count++;
    }
    console.log(`${count} emojis found in the text. The cool ones are:`);
    for (let emoji of emojis) {
        console.log(`${emoji} `);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])