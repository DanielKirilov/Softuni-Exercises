function schoolGrades(input) {
    let obj = {};
    let result = {};
    for (let line of input) {
        let name = line.split(" ").shift();
        let grades = line.slice(name.length + 1)
        grades += " ";

        if (obj.hasOwnProperty(name)) {
            obj[name] += grades;
        } else {
            obj[name] = grades;

        }
    }
    let sortArr = Object.keys(obj).sort((a, b) => a.localeCompare(b))
    for (let key of sortArr) {
        let sum = 0;
        for (let i = 0; i < obj[key].length; i += 2) {
            sum += Number(obj[key][i]);
        }
        let result = (sum / (obj[key].length / 2)).toFixed(2);
        console.log(`${key}: ${result}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])