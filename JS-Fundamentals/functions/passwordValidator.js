function passwordValidator(password) {
    let numberCounter = 0;
    let hasRightLength = checkForRightLength(password);
    let hasNoSpecialCharacters = checkForSpecialCharacters(password);
    let hasRightAmountOfDigits = checkForValidMinimumDigits(password);

    function checkForRightLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function checkForSpecialCharacters(text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isLowerCase = checkForLowerCase(num);
            let isUpperCase = checkForUpperCase(num);
            let isNumber = checkForNumbers(char.charCodeAt(0));

            if (!isLowerCase && !isNumber && !isUpperCase) {
                return false;
            }
        }
        return true;
    }
    function checkForLowerCase(num) {
        return num >= 97 && num <= 122;
    }
    function checkForUpperCase(num) {
        return num >= 65 && num <= 90;
    }
    function checkForNumbers(num) {
        num = Number(num);
        return num >= 48 && num <= 57;
    }

    function checkForValidMinimumDigits(password) {
        for (let ch of password) {
            let isNumber = checkForNumbers(ch.charCodeAt(0));
            if (isNumber) {
                numberCounter++;
            }
        }
        return numberCounter >= 2

    }
    if (!hasRightLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!hasNoSpecialCharacters) {
        console.log("Password must consist only of letters and digits");
    }
    if (!hasRightAmountOfDigits) {
        console.log("Password must have at least 2 digits");
    }
    if (hasRightLength && hasNoSpecialCharacters && hasRightAmountOfDigits) {
        console.log("Password is valid");
    }
}

passwordValidator("logIn");
console.log("----------------");
passwordValidator("MyPass123");
console.log("----------------");
passwordValidator("Pa$s$s$");