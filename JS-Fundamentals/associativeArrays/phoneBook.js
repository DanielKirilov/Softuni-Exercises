function phoneBook(input) {
    let obj = {}
    for (let line of input) {
        let [name, num] = line.split(" ");
        obj[name] = num;
    }
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])