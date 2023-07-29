function addAndRemoveElements(commands) {
    let result = [];
    let num = 1;
    for (let command of commands) {
        if (command == "add") {
            result.push(num);
        }
        else {
            result.pop(num);
        }
        num++;
    }
    if (result.length == 0) {
        console.log("Empty");
    }
    else {
        console.log(result.join("\n"));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add'])