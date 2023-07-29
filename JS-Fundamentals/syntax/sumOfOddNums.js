function solve(num) {
    let sum = 0;
    for (let i = 0; i <= (num * 2) - 1; i++) {
        if (i % 2 === 1) {
            console.log(i);
            sum += i;
        }
        
    }
    console.log(`Sum: ${sum}`);


}
solve(5)