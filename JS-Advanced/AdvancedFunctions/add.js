function solution(startNum) {
    return function (num) {
        return num + startNum;
    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));