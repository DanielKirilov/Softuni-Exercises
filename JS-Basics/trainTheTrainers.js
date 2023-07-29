function solve(input) {
    let jury = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counter = 0;
    let sumGrades = 0;

    while (command !== "Finish") {
        counter++;
        let name = command;
        let gradeNow = 0;
        for (let i = 1; i <= jury; i++) {
            index++;
            let currentGrade = Number(input[index]);
            gradeNow += currentGrade;
        }
        let averageGrade = gradeNow / jury;
        sumGrades += averageGrade;
        console.log(`${name} - ${averageGrade.toFixed(2)}.`);

        index++;
        command = input[index];


    }
    sumGrades = sumGrades / counter;
    console.log(`Student's final assessment is ${sumGrades.toFixed(2)}.`);

}
solve(["2",

    "While-Loop",

    "6.00",

    "5.50",

    "For-Loop",

    "5.84",

    "5.66",

    "Finish"])