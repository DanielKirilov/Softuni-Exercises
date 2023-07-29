const chai = require("chai");
const expect = chai.expect;

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }
  return "odd";
}

describe("Test functionallity ODD or EVEN", function () {
  it("Test for undefined", function () {
    let string = 42;

    let result = isOddOrEven(string);

    expect(result).to.equal(undefined);
  });
  it("Test for even", function () {
    let string = "dani";

    let result = isOddOrEven(string);

    expect(result).to.equal("even");
  });
  it("Test for odd", function () {
    let string = "dan";

    let result = isOddOrEven(string);

    expect(result).to.equal("odd");
  });
});
