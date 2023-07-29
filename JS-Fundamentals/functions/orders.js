function orders(product, quantity) {
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    let result = findFinalPrice(product, quantity);
    return result.toFixed(2);

    function findFinalPrice(a, b) {
        switch (a) {
            case "coffee": return coffeePrice * b; 
            case "water": return waterPrice * b; 
            case "coke": return cokePrice * b; 
            case "snacks": return snacksPrice * b; 
        }
    }

}
console.log(orders("coffee", 2))