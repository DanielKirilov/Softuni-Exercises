//dragon ball reference
function piccolo(input) {
    let set = new Set();

    for (let line of input) {
        let [command, carPlate] = line.split(", ");

        if (command === "IN") {
            set.add(carPlate);
        } else {
            set.delete(carPlate);
        }
    }
    let sortedResult = Array.from(set).sort((a, b) => a.localeCompare(b));

    if (set.size === 0) {
        console.log("Parking Lot is Empty");
    }
    else {
        for (let key of sortedResult) {
            console.log(key);
        }
    }
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])
