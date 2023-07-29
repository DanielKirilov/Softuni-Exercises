function furniture(input) {
    let pattern = />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>[\d.]+)!(?<quantity>\d+)\b/;
    let sum = 0;

    console.log("Bought furniture:");

    for (let line of input) {
        if (line == "Purchase") {
            break;
        }


        if (pattern.test(line)) {
            let product = pattern.exec(line);
            console.log(product.groups.furniture);
            let currentPrice = Number(product.groups.price) * Number(product.groups.quantity);
            sum += currentPrice;
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])