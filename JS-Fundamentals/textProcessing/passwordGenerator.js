function passwordGenerator(input) {
    let firstString = input[0].toLowerCase();
    let secondString = input[1].toLowerCase();
    let word = input[2].toUpperCase().split("");

    let combinatedString = firstString + secondString;
    let length = combinatedString.length;

    for (let i = 0; i < length; i++) {
        if (word.length == 0) {
            word = input[2].toUpperCase().split("");
        }
        if (combinatedString[i] == "a" || combinatedString[i] == "e" ||
            combinatedString[i] == "i" || combinatedString[i] == "o" ||
            combinatedString[i] == "u") {
            let replaceChar = word.shift();
            combinatedString = combinatedString.replace(combinatedString[i], replaceChar);
        }
    }
    combinatedString = combinatedString.split("").reverse().join("");
    console.log(`Your generated password is ${combinatedString}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])