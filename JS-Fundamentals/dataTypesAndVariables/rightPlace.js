function rightPlace(str, char, right) {
    let strTry = str.replace("_", char);
    let match = strTry === right? "Matched" : "Not Matched";
    console.log(match);

}
rightPlace('Str_ng', 'I','Strong')