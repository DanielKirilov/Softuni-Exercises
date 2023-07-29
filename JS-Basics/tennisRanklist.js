function tennis(input) {
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let totalPoints = 0;
    let wins = 0;

    for (let index = 2; index < input.length; index++) {
        let levelOfGame = input[index];

        if (levelOfGame === "W") {

            totalPoints = totalPoints + 2000;
            wins++

        } else if (levelOfGame === "SF") {

            totalPoints = totalPoints + 720;

        } else if (levelOfGame === "F") {

            totalPoints = totalPoints + 1200;
        }

    }
    console.log(`Final points: ${totalPoints + startingPoints}`);
    console.log(`Average points: ${Math.floor(totalPoints / tournamentCount)}`);
    console.log(`${(wins / tournamentCount * 100).toFixed(2)}%`);
}



tennis(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])