function film(input) {
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let costumePrice = Number(input[2]);
    
    if (statistsCount >= 150) {
        costumePrice *= 0.9
    }
 
    let dekor = budget * 0.1;
    let costumesPrice = statistsCount * costumePrice;
    let moneyNeeded = 0;
    let moneyLeft = 0;
 
    if (dekor + costumesPrice > budget) {
        moneyNeeded = (dekor + costumesPrice) - budget; 
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        moneyLeft = budget - (dekor + costumesPrice);
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
film(["15437.62", "186", "57.99"]);