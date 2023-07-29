function hardWords(text, words) {
    let textArr = text[0].split(' ');
    let wordsArr = text[1];
    for (let i = 0; i < textArr.length; i++) {
        let element = textArr[i];
        if (element.includes("_")) {
            let lastElementFlag = false;
            let lastElement = element[element.length - 1];
            if (lastElement !== "_") {
                element = element.substring(0, element.length - 1)
                lastElementFlag = true;
            }
            for (let word of wordsArr) {
                if (element.length === word.length) {
                    if (lastElementFlag) {
                        textArr[i] = word + lastElement;
                    } else {
                        textArr[i] = word
                    }
                }
            }
        }
    }
    console.log(textArr.join(" "));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])