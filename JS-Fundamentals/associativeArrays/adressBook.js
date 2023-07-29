function adressBook(input) {
    let obj = {};
    for (let line of input) {
        let [name, adress] = line.split(":");
        obj[name] = adress;
    }
    let sortObj = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (let key of sortObj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
adressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])