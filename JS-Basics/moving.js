function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let command = input[index];
    let sumBoxes = 0;

    while (command !== "Done") {
        let box = Number(command);
        sumBoxes += box;

        if (sumBoxes > freeSpace) {
            console.log(`No more free space! You need ${sumBoxes - freeSpace} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "Done" && freeSpace >= sumBoxes) {
        console.log(`${freeSpace - sumBoxes} Cubic meters left.`);
    }

}
moving(["10",

"1",

"2",

"4",

"6",

"Done"])