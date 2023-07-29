function cutAndReverse(text) {
    let firstHalf = "";
    let secondHalf = "";
    let firstResult = "";
    let secondResult = "";
    for (let i = 0; i < text.length; i++) {
        if (i < text.length / 2) {
            firstHalf += text[i];
            continue; 
        } 
        secondHalf += text[i]; 
    }
    for (let i = firstHalf.length - 1; i > -1; i--) {
        firstResult += firstHalf[i];
    }
    for (let i = secondHalf.length -  1; i > -1; i--) {
        secondResult += secondHalf[i];
    }
    console.log(firstResult);
    console.log(secondResult);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')