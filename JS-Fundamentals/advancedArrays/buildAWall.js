function buildAWall(arr) {
    let parsedArr = arr.map(Number);
    let workingPeople = parsedArr.filter((length) => length < 30).length;
    let dailyConcreteOnePerson = 195;
    let sumConcrete = 0;
    let dailyConcrete = 0;
    let newArr = [];

    while (workingPeople !== 0) {
        for (let i = 0; i < parsedArr.length; i++) {
            if (parsedArr[i] < 30) {
                parsedArr[i]++;
                sumConcrete += dailyConcreteOnePerson;
                dailyConcrete += dailyConcreteOnePerson
                if (parsedArr[i] === 30) {
                    workingPeople--;
                }
            }

        }
        
        newArr.push(dailyConcrete);
        dailyConcrete = 0;
    }
    console.log(newArr.join(", "));
    let finalPrice = sumConcrete * 1900
    console.log(`${finalPrice} pesos`);
}
buildAWall([21, 25, 28])
console.log("-----------");
buildAWall([17, 22, 17, 19, 17])