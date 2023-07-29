const chai = require("chai");
const expect = chai.expect;

function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }
  let reversed = arr.slice(0).reverse(); // Clone and reverse
  let equal = JSON.stringify(arr) == JSON.stringify(reversed);
  return equal;
}
// Arange - Act - Assert
describe("test for symmetry", function () {
  it("check if input is array - with array", function () {
    let arr = [];

    let result = isSymmetric(arr);

    expect(result).to.equal(true);
  });
  it("check if input is array - with object input", function () {
    let arr = { dani: "az" };

    let result = isSymmetric(arr);

    expect(result).to.equal(false);
  });
  it("check if input is array - with string input", function () {
    let arr = "aza";

    let result = isSymmetric(arr);

    expect(result).to.equal(false);
  });
  it("check if the program works correctly - with false input 1", function () {
    let arr = [1, 2, 3];

    let result = isSymmetric(arr);

    expect(result).to.equal(false);
  });
  it("check if the program works correctly - with false input 2", function () {
    let arr = [1, 2, 3, 3, 2, 0];

    let result = isSymmetric(arr);

    expect(result).to.equal(false);
  });
  it("check if the program works correctly - with true input", function () {
    let arr = [2, 2, 2, 4, 2, 2, 2];

    let result = isSymmetric(arr);

    expect(result).to.equal(true);
  });
  it("check if the program works correctly - with more inputs", function () {
    let arr = [[2, 2, 2, 4, 2, 2, 2], [2], [2, 2, 2, 4, 2, 2, 2]];

    let result = isSymmetric(arr);

    expect(result).to.equal(true);
  });
});
