function solve(input) {
    let bookName = input[0];
    let index = 1;
    let bookFound = false;
    let nextBook = input[index];

    while (nextBook !== "No More Books") {
        if (nextBook === bookName) {
            bookFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }
    if (bookFound === true) {
        console.log(`You checked ${index - 1} books and found it.`);    
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
        
    }

}
solve(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])