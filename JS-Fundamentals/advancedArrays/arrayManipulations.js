function arrayManipulation(input) {
    let arr = input[0].split(" ").map(Number);
    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(" ")
        let command = tokens[0];
        let values = tokens.slice(1).map(Number);

        switch (command) {
            case "Add": arr.push(values[0]); break;
            case "Remove": arr = arr.filter(x => x !== values[0]); break;
            case "RemoveAt": arr.splice(values[0], 1); break;
            case "Insert": arr.splice(values[1], 0, values[0]); break;
        }
        
    }
    console.log(arr.join(' '));
}
arrayManipulation(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3'])