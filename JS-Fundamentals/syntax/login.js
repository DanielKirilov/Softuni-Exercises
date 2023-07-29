function login(input) {
    let username = input[0];
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    let failCounter = 0;

    for (let i = 1; i < input.length; i++) {
        let temporaryPass = input[i];

        if (temporaryPass === password) {
            console.log(`User ${username} logged in.`);

        } else {
            
            failCounter++;

            if (failCounter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");

        }
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])