function validityChecker(x1, y1, x2, y2) {
    function distanceCheck(x1, y1, x2, y2) {
        let distanceX = Math.pow(x1 - x2, 2);
        let distanceY = Math.pow(y1 - y2, 2);
        return Math.sqrt(distanceX + distanceY);
    }
    if (Number.isInteger(distanceCheck(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distanceCheck(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distanceCheck(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
// validityChecker(2, 1, 1, 1);
validityChecker(2, 1.421, 2.421, 2)