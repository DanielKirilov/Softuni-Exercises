function convertToObject(objectString) {
    let realObject = JSON.parse(objectString);

    for (let key of Object.keys(realObject)) {
        console.log(`${key}: ${realObject[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')