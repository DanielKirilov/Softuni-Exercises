function oddOccurrences(input) {
    let obj = {};
    let arrInput = input.split(" ");
    let result = [];

    for (let word of arrInput) {
        word = word.toLowerCase();
        obj[word] = 0;
    }
    for (let line of arrInput) {
        line = line.toLowerCase();
        obj[line] += 1;
    }
    for (let key of Object.entries(obj)) {
        if (key[1] % 2 === 1) {
            result.push(key[0]);
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')