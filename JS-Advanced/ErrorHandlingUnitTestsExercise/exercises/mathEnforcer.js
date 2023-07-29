const chai = require("chai");
const expect = chai.expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("check Math Enforcer functioncallity", function () {
  it("Check addFive function - if input are numbers", function () {
    let result1 = mathEnforcer.addFive([]);
    let result2 = mathEnforcer.addFive({});
    let result3 = mathEnforcer.addFive("3");

    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });
  it("Check addFive function - if it functions correctly", function () {
    let result1 = mathEnforcer.addFive(3);
    let result2 = mathEnforcer.addFive(-3);
    let result3 = mathEnforcer.addFive(0.5);

    expect(result1).to.equal(8, 0.001);
    expect(result2).to.equal(2, 0.001);
    expect(result3).to.be.closeTo(5.5, 0.001);
  });
  it("Check subtractTen function - if input are numbers", function () {
    let result1 = mathEnforcer.subtractTen([]);
    let result2 = mathEnforcer.subtractTen({});
    let result3 = mathEnforcer.subtractTen("3");

    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });
  it("Check subtractTen function - if it functions correctly", function () {
    let result1 = mathEnforcer.subtractTen(3);
    let result2 = mathEnforcer.subtractTen(-3);
    let result3 = mathEnforcer.subtractTen(0.5);
    let result4 = mathEnforcer.subtractTen(10.001);

    expect(result1).to.equal(-7);
    expect(result2).to.equal(-13);
    expect(result3).to.be.equal(-9.5);
    expect(result4).to.be.closeTo(0, 0.001);
  });
  it("Check sum function - if input are numbers", function () {
    let result1 = mathEnforcer.sum([], 3);
    let result2 = mathEnforcer.sum(4, {});
    let result3 = mathEnforcer.sum("3", 5);

    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });
  it("Check sum function - if it functions correctly", function () {
    let result1 = mathEnforcer.sum(3, -5);
    let result2 = mathEnforcer.sum(-3, 4.4);
    let result3 = mathEnforcer.sum(0.1, 0.2);

    expect(result1).to.be.equal(-2);
    expect(result2).to.be.closeTo(1.4, 0.001);
    expect(result3).to.be.closeTo(0.3, 0.001);
  });
});
