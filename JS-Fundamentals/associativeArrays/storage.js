function storage(input) {
    let map = new Map();
    for (let line of input) {
        let splitLine =line.split(" ");
        let product = splitLine[0];
        let price = Number(splitLine[1]);

        if (!map.has(product)) {
            map.set(product, price)
        } else if (map.has(product)) {
            let newPrice = map.get(product)
            let totalPrice = newPrice + price;
            map.set(product, totalPrice)
        }
    }

    for (let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])