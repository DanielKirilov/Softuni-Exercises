function passwordReset(input) {
    let text = input.shift();
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let values = tokens.splice(1);

        switch (command) {
            case "TakeOdd": {
                let extraStr = ""
                for (let j = 0; j < text.length; j++) {
                    if (j % 2 === 1) {
                        extraStr += text[j];
                    }
                }
                text = extraStr;
                console.log(text);
                break;
            }
            case "Cut": {
                let index = Number(values[0]);
                let lengthText = Number(values[1]);
                let end = Number(index + lengthText)

                let cutText = text.substring(index, end);
                text = text.replace(cutText, "");
                console.log(text);
                break;
            }
            case "Substitute": {
                let oldText = values[0];
                let replacement = values[1];

                if (text.includes(oldText)) {
                    while(text.includes(oldText)) 
                    {
                        text = text.replace(oldText, replacement);
                    }
                }
                else {
                    console.log("Nothing to replace!");
                    break;
                }
                console.log(text);
                break;
            }
            case "Done": {
                console.log(`Your password is: ${text}`);
            }
        }
    }
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])	
