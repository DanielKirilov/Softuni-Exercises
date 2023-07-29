function decryptingCommands(data) {
    let text = data.shift();

    for (let line of data) {
        let tokens = line.split(" ");
        let command = tokens[0];

        switch(command) {
            case "Replace": {
                let oldWord = tokens[1];
                let newWord = tokens[2];
                if (text.includes(oldWord)) {
                    while (text.includes(oldWord)) {
                        text = text.replace(oldWord, newWord);
                    }
                }
                console.log(text);
                break;
            }
            case "Cut": {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (validIndex(startIndex) && validIndex(endIndex)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        text = text.replace(text[startIndex], "");
                    } 
                    console.log(text);
                    break;
                }
                else {
                    console.log("Invalid indices!");
                    break;
                }
            }
            case "Make": {
                let upperOrLower = tokens[1];
                if (upperOrLower == "Upper") {
                    for (let i = 0; i < text.length; i++) {
                        let char = text[i];
                        let upperChar = char.toUpperCase();
                        text = text.replace(char, upperChar);
                    }
                } 
                else if (upperOrLower == "Lower") {
                    for (let i = 0; i < text.length; i++) {
                        let char = text[i];
                        let upperChar = char.toLowerCase();
                        text = text.replace(char, upperChar);
                    }
                }
                console.log(text);
                break; 
            }
            case "Check": {
                let checkText = tokens[1];
                if (text.includes(checkText)) {
                    console.log(`Message contains ${checkText}`);
                }
                else {
                    console.log(`Message doesn't contain ${checkText}`);
                }
                break;
            }
            case "Sum": {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let sum = 0;
                if (validIndex(startIndex) && validIndex(endIndex)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        let charSum = text[i].charCodeAt();
                        sum += charSum
                    }
                    console.log(sum);
                } else {
                    console.log("Invalid indices!");
                }
                break;
            }
            case "Finish": {
                return;
            }
        }
    }
    function validIndex(index) {
        if (index >= 0 && index < text.length) {
            return true;
        }
        else {
            return false;
        }
    }
}
decryptingCommands(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Cut 1 4",
"Finish"])
