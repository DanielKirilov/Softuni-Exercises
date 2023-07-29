function wordsTracker(input) {
    let words = input.shift().split(" ");
    let obj = {};

    for (let word of words) {
        obj[word] = 0;
    }

    for (let line of input) {
        if (obj.hasOwnProperty(line)) {
            obj[line] += 1;
        }
    }
    let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let key of sortedObj) {
        console.log(`${key[0]} - ${key[1]}`);
    }
}
wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])