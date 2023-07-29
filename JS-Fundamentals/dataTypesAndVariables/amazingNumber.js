function amazingNumber(num) {
    num = num.toString();
    let sum = 0;
    
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes("9") ? 
    console.log(`${num} Amazing? True`) :
    console.log(`${num} Amazing? False`);

}
amazingNumber(1233)