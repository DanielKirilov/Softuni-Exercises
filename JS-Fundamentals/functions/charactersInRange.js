function charactersInRange(charOne, charTwo) {
    let start = checkTheBiggerNumber(charOne, charTwo);
    let end = checkTheSmallerNumber(charOne, charTwo);
    let buff = "";
    

    for (let i = start + 1; i < end; i++) {
        let numBetween = String.fromCharCode(i);
        buff += numBetween + " ";
    }
    return buff;
    
    function checkTheBiggerNumber(a, b) {
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
            return b.charCodeAt(0);
        } else {
            return a.charCodeAt(0);
        }
    }

    function checkTheSmallerNumber(a, b) {
        if (a.charCodeAt(0) < b.charCodeAt(0)) {
            return b.charCodeAt(0);
        } else {
            return a.charCodeAt(0);
        }
    }

}
console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));