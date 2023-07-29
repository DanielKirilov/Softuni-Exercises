function lettersChangeNumbers(input) {
    let sequences = input.trim().split(/\s+/);
    let sum = 0;
    let upperCase = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    }
    let lowerCase = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    }

    for (let sequence of sequences) {
  //      if (sequence.length >= 2) {
            sequence = sequence.split("");
            let firstLetter = sequence.shift();
            let lastLetter = sequence.pop();
            let numbers = Number(sequence.join(""));
            if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
                numbers = numbers / upperCase[firstLetter];
            }
            else if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
                numbers = numbers * lowerCase[firstLetter];
            }

            if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
                numbers = numbers - upperCase[lastLetter];
            }
            else if (lastLetter.charCodeAt() >= 97 && lastLetter.charCodeAt() <= 122) {
                numbers = numbers + lowerCase[lastLetter];
            }
            sum += numbers;
        }
   // }
    console.log(sum.toFixed(2));
}
lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z    H456z')