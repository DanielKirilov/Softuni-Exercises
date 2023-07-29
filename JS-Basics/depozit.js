function demo(input) {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let annualrate = Number(input[2]);

    result = deposit + time * (deposit * (annualrate / 100 ) / 12 )
    console.log(result);

    

}
demo(["2350","6 ","7 "])