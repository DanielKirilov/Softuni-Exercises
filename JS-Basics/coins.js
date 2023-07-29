function solve(input) {
    let money = Number(input[0]);
    let coin = 0;
    let moneyInCents = Math.floor(money * 100);

    while (moneyInCents > 0) {
        if (moneyInCents >= 200) {
            moneyInCents = moneyInCents - 200;
            coin++;
        }
        else if (moneyInCents >= 100) {
            moneyInCents = moneyInCents - 100;
            coin++;
        }
        else if (moneyInCents >= 50) {
            moneyInCents = moneyInCents - 50;
            coin++;
        }
        else if (moneyInCents >= 20) {
            moneyInCents = moneyInCents - 20;
            coin++;
        }
        else if (moneyInCents >= 10) {
            moneyInCents = moneyInCents - 10;
            coin++;
        }
        else if (moneyInCents >= 5) {
            moneyInCents = moneyInCents - 5;
            coin++;
        }
        else if (moneyInCents >= 2) {
            moneyInCents = moneyInCents - 2;
            coin++;
        }
        else if (moneyInCents >= 1) {
            moneyInCents = moneyInCents - 1;
            coin++;

        }
    }
    console.log(coin);
}
solve(["1.23"])