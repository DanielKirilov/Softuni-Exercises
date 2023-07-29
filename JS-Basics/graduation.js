function graduation(input) {
    let name = input[0];
    let grades = 1;
    let index = 0;
    let total = 0;
    let excluded = 0;
    let grade = Number(input[index]);

    while (grades <= 12) {
        index++
        

        if (grade < 4.00) {
            excluded++;
            index++;
            grade = Number(input[index]);
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grades} grade`);
            }
            continue;
        }
        index++ 
        total += grade;
        
        grades++;
    }
    if (grade > 4.00) {
        console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`);
    
    }
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])