function demo(input) {
    let username = input[0];
    let actualPassword = input[1];
    let index = 2;
    let currentPassword = input[index];

    while (currentPassword !== actualPassword) {
        
        index++;
        currentPassword = input[index];
    }
    
        console.log(`Welcome ${username}!`);
    

}
demo(["Gosho", "secret", "secret"])