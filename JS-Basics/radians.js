function demo(input) {

    let radians = Number(input[0]);
    let degrees = Number(radians * 180 / Math.PI) 
    
    console.log(degrees);
}
demo(["6.2832"])