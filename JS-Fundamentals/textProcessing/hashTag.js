function hashTag(text) {
    let textArr = text.split(" ");

    for (let element of textArr) {
        let startingElement = element[0];
        if (startingElement == "#" && element.length > 1) {
            let isSpecial = true;
            for (let i = 1;  i < element.length; i++) {
                if ((element[i].toLowerCase().charCodeAt(0) >= 97 && element[i].toLowerCase().charCodeAt(0) <= 122)) {
                    continue;
                } else {
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial) {
                console.log(element.substring(1));
            }
        }
    }
}
hashTag("#1")