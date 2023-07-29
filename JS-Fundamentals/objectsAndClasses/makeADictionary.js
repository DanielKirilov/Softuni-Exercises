function makeADictionary(input) {
    let myObj = {};

    for (let line of input) {
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);
        let key = keys[0];
        myObj[key] = obj[keys];
    }
    let sortObj = Object.keys(myObj).sort((keyA, keyB) => keyA.localeCompare(keyB));
    
    for (let line of sortObj) {
        console.log(`Term: ${line} => Definition: ${myObj[line]}`);
    }
}
makeADictionary(
[

'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the publicon a fixed route and for a fare."}',

'{"Boiler":"A fuel-burning apparatus or container for heating water."}',

'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

]
)