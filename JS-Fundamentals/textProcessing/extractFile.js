function extractFile(input) {
    let file = input.substring(input.lastIndexOf("\\"), input.length);
    let fileName = file.substring(1, file.lastIndexOf("."));
    let fileExtension = file.substring(file.lastIndexOf(".") + 1, file.length)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx.domain')