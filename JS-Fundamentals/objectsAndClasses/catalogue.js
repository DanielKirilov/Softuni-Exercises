function catalogue(input) {
    let catalogueObj = {};
    for (let line of input) {
        let [name, price] = line.split(" : ");
        catalogueObj[name] = Number(price);
    }
    let sortedObj = Object.keys(catalogueObj).sort((nameA, nameB) => nameA.localeCompare(nameB));
    let firstLetter = sortedObj[0][0];
    console.log(firstLetter);
    for (let line of sortedObj) {
        if (firstLetter == line[0]) {
            console.log(`${line}: ${catalogueObj[line]}`);
        }
        else {
            firstLetter = line[0];
            console.log(firstLetter);
            console.log(`${line}: ${catalogueObj[line]}`);
        }
    }

}
catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])
console.log("-------------");
catalogue([

    'Omlet : 5.4',
    
    'Shirt : 15',
    
    'Cake : 59'
    
    ])