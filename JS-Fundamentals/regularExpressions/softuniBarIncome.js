function softuniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+?.\d*)\$/g;
    let sum = 0;
    for (let line of input) {
        if (line == "end of shift") {
            break;
        }
        let matches = line.matchAll(pattern);
        for (let match of matches) {
            let currentPrice = Number(match.groups.count) * Number(match.groups.price);
            console.log(`${match.groups.name}: ${match.groups.product} - ${currentPrice.toFixed(2)}`);
            sum += currentPrice;
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`);
}
softuniBarIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])