const chai = require("chai");
const expect = chai.expect;

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}

describe("tests for summing nums", function () {
    it("check if it works with - negative numbers", function () {
        let arr = [1, -3 , -5];

        let result = sum(arr);

        expect(result).to.equal(-7);
    })
    it("check if it works with - floating point numbers", function () {
      let arr = [0.2, 0.1 , 0];

      let result = sum(arr);

      expect(result).to.be.approximately(0.3, 0.001);
  })
  it("check if it doesnt works with - NaN point numbers", function () {
    let arr = ["dani", 0.1 , 0];

    let result = sum(arr);

    expect(result).to.be.NaN;
})
})
