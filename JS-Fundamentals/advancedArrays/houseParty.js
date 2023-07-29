function houseParty(input) {
    let listParty = [];
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" is ")
        let name = commands[0];
        let command = commands[1];

        if (command === "going!") {
            if (listParty.indexOf(name) === -1) {
                listParty.push(name);
            } else {
             console.log(`${name} is already in the list!`);
            }
        }
        else {
            if (listParty.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`);
            } else {
                listParty.splice(listParty.indexOf(name, 1))
            }
        }
    }
    console.log(listParty.join("\n"));
}
houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])

console.log("-----------");
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])