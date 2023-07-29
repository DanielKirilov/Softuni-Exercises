const chai = require("chai");
const expect = chai.expect;

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}
describe("check functionallity for looking up char in a str", function () {
  it("check for incorrect string value", function () {
    let string = 32;
    let index = 2;

    let result = lookupChar(string, index);
    expect(result).to.equal(undefined);
  });
  it("check for incorrect index value", function () {
    let string = "dani";
    let index1 = 3.5;
    let index2 = "sashko";

    let result1 = lookupChar(string, index1);
    let result2 = lookupChar(string, index2);

    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
  });
  it("check if the index is valid", function () {
    let string = "dani";
    let index1 = -1;
    let index2 = 24;

    let result1 = lookupChar(string, index1);
    let result2 = lookupChar(string, index2);

    expect(result1).to.equal("Incorrect index");
    expect(result2).to.equal("Incorrect index");
  });
  it("check with a valid input", function () {
    let string = "dani";
    let index = 3;

    let result = lookupChar(string, index);

    expect(result).to.equal("i");
  });
});
