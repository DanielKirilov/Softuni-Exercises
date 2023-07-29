function oddoreven(input) {
    let number = Number(input[0]); 
    realnumber = Number(number % 2);

    if (realnumber === 0) {
        console.log("even");
    } else 
    console.log(`odd`);
    

}
oddoreven(["2"])