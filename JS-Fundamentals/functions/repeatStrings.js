function repeatStrings(string, repeatCount) {
    let buff = "";
    for (let i = 0; i < repeatCount; i++) {
        buff += string + "";
    }
    return buff;

}
console.log(repeatStrings("abc", 3))