function partyTime(input) {
    let vipList = [];
    let regularList = [];

    let currentCommand = input.shift()

    while (currentCommand !== "PARTY") {
        let isRegular = isNaN(currentCommand[0]);

        if (isRegular) {
            regularList.push(currentCommand);
        } else {
            vipList.push(currentCommand);
        }
        currentCommand = input.shift();
    }
    let guestList = vipList.concat(regularList);
    
    for (let element of input) {
        if (guestList.includes(element)) {
            guestList.splice(guestList.indexOf(element) , 1);
        }
    }
    console.log(guestList.length);
    guestList.forEach(guest => console.log(guest));
}
partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 
'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])