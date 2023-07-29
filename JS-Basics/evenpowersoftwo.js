function evenpowersoftwo(input) {
    let num = Number(input[0]);
    
    for (i = 0; i <= num; i += 2) {
        let result = Math.pow(2, i)
        console.log(result);
    }

}
evenpowersoftwo(["4"])