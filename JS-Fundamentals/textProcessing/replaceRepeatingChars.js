function replaceRepeatingChars(text) {
    let result = "";
    let textArr = text.split("");
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i - 1] === textArr[i]) {
            continue;
        } else {
            result += textArr[i];
        }
    }
    console.log(result);
}
replaceRepeatingChars('aasaa')