function traveling(input) {
    let index = 0;
    let command = input[index];
    let totalSavedMoney = 0;
    let needMoney = 0;

    while (command !== "End") {
        let destination = command;
        index++;
        needMoney = Number(input[index]);

        index++;
        let savedMoney = Number(input[index]);

        while (savedMoney <= needMoney) {
            totalSavedMoney += savedMoney;

            if (totalSavedMoney >= needMoney) {
                console.log(`Going to ${destination}!`);
                break;
            }

            index++;
            savedMoney = Number(input[index]);
        }

        index++;
        command = input[index];
        totalSavedMoney = 0;

    }

}
solve(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])