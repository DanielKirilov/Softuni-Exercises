function wordOccurrences(input) {
    let obj = {};
    for (let line of input) {
        if (obj.hasOwnProperty(line)) {
            obj[line] += 1
        }
        else {
            obj[line] = 1;
        }
    }
    let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let key of sortedObj) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])