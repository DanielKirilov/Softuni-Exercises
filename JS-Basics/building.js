function build(input) {
    let floorCount = Number(input[0]);
    let rooms = Number(input[1]);
    let roomType = "";

    for (let floorNumber = floorCount; floorNumber >= 1; floorNumber--) {
        if (floorNumber === floorCount) {
            roomType = "L";
        } else if (floorNumber % 2 === 1) {
            roomType = "A";
        } else if (floorNumber % 2 === 0) {
            roomType = "O";
        }
        let space = "";
        for (roomNum = 0; roomNum < rooms; roomNum++) {
            space = space + `${roomType}${floorNumber}${roomNum} `
        }
        console.log(space.trim());
    }


}
build(["6", "4"])