function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let cakeAvailable = width * length;
    let cakeTaken = 0;
    let index = 2;
    let command = input[index];

    while (command !== 'STOP') {
        let cakePiece = Number(command);
        cakeTaken += cakePiece;


        if (cakeTaken > cakeAvailable) {
            console.log(`No more cake left! You need ${cakeTaken - cakeAvailable} pieces more.`);
            break;
        }
        index++;
        command = input[index];

    }
    if (command === 'STOP' && cakeAvailable >= cakeTaken) {
        console.log(`${cakeAvailable - cakeTaken} pieces are left.`);
    }
    
}
cake[("10",
"2",
"2",
"4",
"6",
"STOP")]