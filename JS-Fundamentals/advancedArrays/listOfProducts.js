function listOfProducts(arr) {
    let sortedProducts = arr.sort();
    for (let i = 1; i < arr.length + 1; i++) {
        console.log(`${i}.${sortedProducts[i - 1]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])