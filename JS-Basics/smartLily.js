function lily(input) {

    let lilyAge = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let oneToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let moneyStolen = 0;
    let addMoney = 10;

    for (let index = 1; index <= lilyAge; index++) {
        if (index % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            moneyStolen++;
        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * oneToyPrice;
    let totalMoney = totalMoneyFromToys + savedMoney - moneyStolen

    if (totalMoney >= laundryPrice) {
        console.log(`Yes! ${(totalMoney - laundryPrice).toFixed(2)}`);
    } else if (totalMoney < laundryPrice) {
        console.log(`No! ${(laundryPrice - totalMoney).toFixed(2)}`);
    }

}
lily(["10", "170.00", "6"])