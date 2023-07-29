function townPopulation(data) {
    let result = {};
    for (let line of data) {
        let [town, population] = line.split(" <-> ");
        if (!result[town]) {
            result[town] = Number(population);
        } else {
            result[town] += Number(population);
        }
    }
    for (let key of Object.keys(result)) {
        console.log(`${key} : ${result[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])

// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
