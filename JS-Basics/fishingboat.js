function fishingboat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let price = 0;
    switch (season) {
        case "Summer":
        case "Autumn":
            price = 4200; break;
        case "Winter":
            price = 2600; break;
        case "Spring":
            price = 3000; break;
    }

    if (fishermen <= 6) {

        price = 0.9 * price

    } else if (fishermen > 7 && fishermen <= 11) {

        price = 0.85 * price

    } else if (fishermen > 12) {

        price = 0.75 * price

    } if (fishermen % 2 === 0 && season !== "Autumn") {
        price = 0.95 * price
    } if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else if (price > budget) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }


}
fishingboat(["3600", "Autumn", "6"])