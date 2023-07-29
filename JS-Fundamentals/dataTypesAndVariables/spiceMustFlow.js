function spiceMustFlow(currentSpice) {
    let totalSpice = 0;
    let dayCounter = 0;

    while (currentSpice >= 100) {
        totalSpice += currentSpice - 26;
        currentSpice -= 10;
        dayCounter++;
    }

    if (totalSpice >= 26) {
    totalSpice -= 26;
    }

    console.log(dayCounter);
    console.log(totalSpice);
}
spiceMustFlow(450)