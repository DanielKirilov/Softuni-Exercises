function special(input) {
    let speicalNum = Number(input[0]);
    let space = "";

    for (let i = 1; i <= 9; i++) {
        for (let t = 1; t <= 9; t++) {
            for (let h = 1; h <= 9; h++) {
                for (let u = 1; u <= 9; u++) {
                    if (speicalNum % i === 0 &&
                        speicalNum % t === 0 &&
                        speicalNum % h === 0 &&
                        speicalNum % u === 0) {
                        space += `${i}${t}${h}${u} `                   
                    }
                }
            }
        }
    }
    console.log(space);

}
special(["3"])