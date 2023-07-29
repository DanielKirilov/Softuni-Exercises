function examprep(input) {
    let index = 1;
    let neededBadGrades = Number(input[0]);
    let nameOfExercise = input[index];
    let sum = 0;
    let timesFailed = 0;
    let numberOfExercises = 0;

    while (nameOfExercise !== "Enough") {
        nameOfExercise = input[index];
        let gradeOfExercise = Number(input[index + 1]);
        sum += gradeOfExercise;

        if (gradeOfExercise > 4) {

            index += 2;
            nameOfExercise = input[index];
            numberOfExercises++;
            continue;


        }
        else if (gradeOfExercise <= 4) {
            timesFailed++;
            index += 2;
            nameOfExercise = input[index];
            numberOfExercises++;
            continue;

        }
        if (timesFailed === neededBadGrades) {
            console.log(`You need a break, ${timesFailed} poor grades.`);
            break;
        }
        

    }
    if (nameOfExercise === "Enough") {
        console.log(`Average score: ${(sum / numberOfExercises).toFixed(2)}`);
        console.log(`Number of problems: ${numberOfExercises}`);
        console.log(`Last problem: ${input[index - 2]}`)
    } 

}
examprep(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])