function storeProvision(store, storeOrder) {
    let obj = {};
    for (let i = 0; i < store.length; i += 2) {
        let currentProduct = store[i];
        let currentProductQuantity = Number(store[i + 1]);

        obj[currentProduct] = currentProductQuantity;
    }
    for (let i = 0; i < storeOrder.length; i += 2) {
        let currentProduct = storeOrder[i];
        let currentProductQuantity = Number(storeOrder[i + 1]);

        if (obj.hasOwnProperty(currentProduct)) {
            obj[currentProduct] += currentProductQuantity;
        } else {
            obj[currentProduct] = currentProductQuantity;
        }
    }
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    )