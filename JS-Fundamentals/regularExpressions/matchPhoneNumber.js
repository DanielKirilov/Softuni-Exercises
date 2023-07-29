function matchPhoneNumber(text) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let numbers = text[0];
    let validNumbers = numbers.match(pattern);
    console.log(validNumbers.join(", "));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])