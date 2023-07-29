function convert(nameOne, nameTwo, nameColor) {
    let objectNames = {
        name : nameOne,
        lastName: nameTwo,
        hairColor : nameColor,
    }
    let objectString = JSON.stringify(objectNames)
    console.log(objectString);
}
convert('George', 'Jones', 'Brown')