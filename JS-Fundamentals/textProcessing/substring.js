function substring(text, start, end) {
    let nextElements = end + start;
    let result = text.substring(start, nextElements);
    console.log(result);
}
substring('ASentence', 1, 8)