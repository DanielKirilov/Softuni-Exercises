function maxSequenceOfEqualElements(arr) {
    let leftMostIndex = 0;
    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentSequence = [currentNum]

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum === nextNum) {
                currentSequence.push(nextNum);

            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }

    }
    console.log(longestSequence.join(" "));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([4, 4, 4, 4])
