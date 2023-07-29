function equalArrays(firstArr, secondArr) {
    let sum = 0;
    let differencesCount = 0;
    let difference = false;

    for (let i = 0; i < firstArr.length; i++) {
        arrNum = Number(firstArr[i]);

        if (firstArr[i] === secondArr[i]) {
            sum += arrNum;
        } else if (firstArr[i] !== secondArr[i]) {
            differencesCount = i;
            difference = true;
            break;
        }
    }
    if (difference) {
        console.log(`Arrays are not identical. Found difference at ${differencesCount} index`);
    } else if (!difference) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
