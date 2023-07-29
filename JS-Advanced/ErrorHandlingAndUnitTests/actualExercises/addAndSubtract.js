const chai = require("chai");
const expect = chai.expect;
function createCalculator() {
  let value = 0;
  return {
    add: function (num) {
      value += Number(num);
    },
    subtract: function (num) {
      value -= Number(num);
    },
    get: function () {
      return value;
    },
  };
}
describe("check if the calculator works", function () {
  let calc;

  beforeEach(function () {
    calc = createCalculator();
  });
  it("check if value is 0", function () {
    let value = calc.get();

    expect(value).to.equal(0);
  });
  it("check if add function works correctly with mutliple commands - add", function () {
    calc.add(5);
    calc.add("5");
    let value = calc.get();

    expect(value).to.be.equal(10);
  });
  it("check if add function works correctly with mutliple commands- sub", function () {
    calc.subtract(5);
    calc.subtract("5");
    let value = calc.get();

    expect(value).to.be.equal(-10);
  });
  it("check if add function works correctly with non number values - add", function () {
    calc.add({});
    calc.add([]);
    let value = calc.get();

    expect(value).to.be.NaN;
  });
  it("check if add function works correctly with non number values - sub", function () {
    calc.subtract({});
    calc.subtract([]);
    let value = calc.get();

    expect(value).to.be.NaN;
  });
});
