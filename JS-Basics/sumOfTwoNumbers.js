function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        for (let k = start; k <= end; k++) {
            counter++;
            let sum = i + k;
            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${k} = ${sum})`);
                return;

            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNumber}`);

}
solve(["88", "888", "2000"])