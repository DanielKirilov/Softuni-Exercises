function exercise(input) {
    let index = 0;
    let command = input[index];
    let max = Number.MAX_SAFE_INTEGER;
    
    while (command !== "Stop") {
        max = Number(max);
        let num = Number(command);
        
        if(num < max) {
            max = num;
        }
        index++
        command = input[index];
    }
console.log(max);
}
exercise(["100",

"99",

"80",

"70",

"Stop"])