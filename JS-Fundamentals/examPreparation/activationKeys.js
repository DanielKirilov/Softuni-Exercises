function activationKeys(data) {
    let text = data.shift();

    for (let line of data) {
        let tokens = line.split(">>>");
        let command = tokens[0];
        let values = tokens.slice(1);

        switch (command) {
            case "Contains": {
                let checkText = values[0];
                if (text.includes(checkText)) {
                    console.log(`${text} contains ${checkText}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
            }
            case "Flip": {
                let upperOrLower = values[0];
                let startIndex = Number(values[1]);
                let endIndex = Number(values[2]);

                for (let i = startIndex; i < endIndex; i++) {
                    if (upperOrLower == "Upper") {
                        text = text.replace(text[i], text[i].toUpperCase());
                    } else {
                        text = text.replace(text[i], text[i].toLowerCase());
                    }
                }
                console.log(text);
                break;
            }
            case "Slice": {
                let startIndex = Number(values[0]);
                let endIndex = Number(values[1]);

                for (let i = startIndex; i < endIndex; i++) {
                    text = text.replace(text[startIndex], "");
                }
                console.log(text);
                break;
            }
            case "Generate": {
                console.log(`Your activation key is: ${text}`);
                break;
            }
        }
    }
}
// activationKeys(["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"])
// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Generate"
// ])
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
activationKeys(["bbbb", "Flip>>>Upper>>>1>>>3", "Generate"])

