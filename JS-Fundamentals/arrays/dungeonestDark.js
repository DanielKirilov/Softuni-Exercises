function dungeonestDark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let gameOver = false;
    let coins = 0;
    let roomCounter = 0;

    for (let room of rooms) {
        roomCounter++;
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);

        switch (command) {
            case "potion":
                let difference = health + value;
                if (difference <= 100) {
                    health += value;
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else if (difference > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`)
                } break;
            case "chest":
                let currentCoins = value;
                coins += value;
                console.log(`You found ${currentCoins} coins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                   
                } else if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    gameOver = true;
                    console.log(`Best room: ${roomCounter}`);
                    
                }
                break;
        }
        if (gameOver) {
            break;
        } 
    }
    if (!gameOver) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log("==================");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])