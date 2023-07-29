function aMinorTask(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let amount = Number(input[i + 1]);

        if (!(obj.hasOwnProperty(resource))) {
            obj[resource] = 0;
        }
        obj[resource] += amount;

    }
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
aMinorTask([

    'Gold',

    '155',

    'Silver',

    '10',

    'Copper',

    '17'

])