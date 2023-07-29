function messageTranslator(data) {
    let numOfMessages = Number(data.shift());
    let pattern = /[!](?<command>[A-Z][a-z]{2,})[!]\:\[(?<colon>[A-Za-z]{8,})\]/gm

    for (let i = 0; i < numOfMessages; i++) {
        let message = data[i];
        let matches = message.matchAll(pattern);
        if (pattern.test(message)) {
            
        } else {
            console.log("The message is invalid");
            continue;
        }
        let number = [];
        for (let match of matches) {
            let command = match.groups["command"];
            let colon = match.groups["colon"];
            for (let char of colon) {
                number.push(char.charCodeAt());
            }
            console.log(`${command}: ${number.join(" ")}`);
        }
    }
}
messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])	
