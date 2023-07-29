function newhouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let finalPrice = 0;

    if (flowerCount <= 80 && flowerType === "Roses") {

        finalPrice = flowerCount * 5;

    } else if (flowerCount <= 90 && flowerType === "Dahlias") {

        finalPrice = flowerCount * 3.80;

    } else if (flowerCount <= 80 && flowerType === "Tulips") {

        finalPrice = flowerCount * 2.80;

    } else if (flowerCount >= 120 && flowerType === "Narcissus") {

        finalPrice = flowerCount * 3;

    } else if (flowerCount >= 80 && flowerType === "Gladiolus") {

        finalPrice = flowerCount * 2.50;
    }
    if (flowerCount > 80 && flowerType === "Roses") {

        finalPrice = flowerCount * 5;
        finalPrice = finalPrice * 0.90;

    } else if (flowerCount > 90 && flowerType === "Dahlias") {

        finalPrice = flowerCount * 3.80;
        finalPrice = finalPrice * 0.85;

    } else if (flowerCount > 80 && flowerType === "Tulips") {

        finalPrice = flowerCount * 2.80;
        finalPrice = finalPrice * 0.85;

    } else if (flowerCount < 120 && flowerType === "Narcissus") {

        finalPrice = flowerCount * 3;
        finalPrice = finalPrice * 1.15;

    } else if (flowerCount < 80 && flowerType === "Gladiolus") {

        finalPrice = flowerCount * 2.50;
        finalPrice = finalPrice * 1.20;

    } if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else if (finalPrice > budget) {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`)
    }

}
newhouse(["Narcissus", "119", "360"])