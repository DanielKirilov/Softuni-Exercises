function matrix(num) {
    return makingTheMatrix(num)
    function makingTheMatrix(num) {
        let buff = "";
        let j = 1;
        for (let i = 1; i <= num; i++) {
            while (j <= num) {
                buff += num + " ";
                j++;
            }
            console.log(buff);
        }
        
    }
}
matrix(3)