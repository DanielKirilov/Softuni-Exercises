function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    let tokens = arr;

    for (let i = 0; i < arr.length; i++) {
        let commands = tokens[i].split(" ");
        let command = commands[0];
        let item = commands[1];
        switch (command) {
            // If you receive the Buy command, you should add the
            // equipment at the last position in the inventory, but 
            //only if it isn't bought already.
            case "Buy":
                if (inventory.indexOf(item) === -1) {
                    inventory.push(item);
                }
                break;
            // If you receive the Trash command, delete the equipment if it exists.
            case "Trash":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            // If you receive the Repair command, you should repair 
            //the equipment if it exists and place it in the last position.
            case "Repair":
                if (inventory.includes(item)) {
                    let repairedItem = inventory.splice(inventory.indexOf(item), 1)
                    inventory.push(repairedItem.toString());
                }
                break;

            // If you receive the Upgrade command, you should check 
            //if the equipment exists and insert after it 
            //the upgrade in the following format: "{equipment}:{upgrade}".
            case "Upgrade":
                let newItem = item.split("-");
                for (let i = 0; i < inventory.length; i++) {
                    if (newItem[0] === inventory[i]) {
                        let result = newItem[0] + ":" + newItem[1];
                        inventory.splice(i + 1, 0, result);
                    }
                }
                break
        }
    }
    console.log(inventory.join(" "));
}
gladiatorInventory(['SWORD Shield Spear',

    'Buy Bag',

    'Trash Shield',

    'Repair Spear',

    'Upgrade SWORD-Steel'])
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
gladiatorInventory(['SWORD Shield Spear',

    'Trash Bow',

    'Repair Shield',

    'Upgrade Helmet-V'])