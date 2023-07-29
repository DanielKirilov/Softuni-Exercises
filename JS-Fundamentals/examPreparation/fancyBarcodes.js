function fancyBarcodes(data) {
    let numberOfBarcodes = data.shift();
    let pattern = /(@#+)(?<word>[A-Z][A-Za-z0-9]{4,})([A-Z]@#+)/g

    for (let i = 0; i < numberOfBarcodes; i++) {
        let line = data[i];
        let match = line.match(pattern)
        if (match) {
            let barcode = "";
            for (let char of line) {
                if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                    barcode = barcode.concat(char);
                }
            }
            if (barcode == "") {
                barcode = "00";
            }
            console.log(`Product group: ${barcode}`);
        }
        else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
