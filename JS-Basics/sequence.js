function sequence(input) {

    let num = Number(input[0]);
    let currentNum = 1;
    
    while (num >= currentNum) {

        console.log(currentNum);
        currentNum = (currentNum * 2) + 1;
        
    }



}
sequence(["17"])