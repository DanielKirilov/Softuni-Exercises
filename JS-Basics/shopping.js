function shopping(input) {

    let budgetPeter = Number(input[0]);
    let videoCardsNum = Number(input[1]);
    let processorsNum = Number(input[2]);
    let ramNum = Number(input[3]);

    videoCards = videoCardsNum * 250;

    processorsPrice = 0.35 * videoCards;
    ramPrice = 0.10 * videoCards;

    processors = processorsNum * processorsPrice;
    ram = ramNum * ramPrice;

    price = videoCards + processors + ram;

    if (videoCardsNum > processorsNum) {
        price = price * 0.85

    } if (price <= budgetPeter) {
        diff = Math.abs(budgetPeter - price);
        console.log(`You have ${diff.toFixed(2)} leva left!`)

    } else if (price > budgetPeter) {
        diff = Math.abs(price - budgetPeter);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["900", "2", "1", "3"])