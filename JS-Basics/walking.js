function walk(input) {
    let index = 0;
    let steps = Number(input[index]);
    let command = input[index];
    let sum = 0;

    while (command !== "Going home") {
        sum += steps;
        index++;
        command = input[index];
        steps = Number(input[index]);

        if(sum > 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - 10000} steps over the goal!`);
            break;
        }

    }
    let stepsAfter = Number(input[index + 1])
    let walkHome = sum + stepsAfter;

    if(walkHome > 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${walkHome - 10000} steps over the goal!`);
    }
    else if (command === "Going home") {
        console.log(`${10000 - walkHome} more steps to reach goal.`);  
    } 
    
}
walk(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])