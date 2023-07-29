const chai = require("chai");
const expect = chai.expect;

function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }
  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }
  return (
    "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2)
  );
}
describe("test rgb to hex", function () {
  it("check input with wrong - red inputs", function () {
    let red1 = 100;
    let red2 = 420;
    let red3 = "dani";

    let green = 100;
    let blue = 100;

    let result1 = rgbToHexColor(red1, green, blue);
    let result2 = rgbToHexColor(red2, green, blue);
    let result3 = rgbToHexColor(red3, green, blue);

    expect(result1).to.equal("#646464");
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });
  it("check input with wrong - green inputs", function () {
    let red = 100;
    let green1 = 100;
    let green2 = 420;
    let green3 = "dani";

    let blue = 100;

    let result1 = rgbToHexColor(red, green1, blue);
    let result2 = rgbToHexColor(red, green2, blue);
    let result3 = rgbToHexColor(red, green3, blue);

    expect(result1).to.equal("#646464");
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });
  it("check input with wrong - blue inputs", function () {
    let red = 100;
    let green = 100;

    let blue1 = 100;
    let blue2 = 420;
    let blue3 = "dani";

    let result1 = rgbToHexColor(red, green, blue1);
    let result2 = rgbToHexColor(red, green, blue2);
    let result3 = rgbToHexColor(red, green, blue3);

    expect(result1).to.equal("#646464");
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });
  it("check input with correct inputs - 1", function () {
    let red = 100;
    let green = 100;
    let blue = 100;

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal("#646464");
  });
  it("check input with correct inputs - 2", function () {
    let red = 141;
    let green = 102;
    let blue = 10;

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal("#8D660A");
  });
  it("check input with wrong inputs - 1", function () {
    let red = {};
    let green = "421";
    let blue = [];

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal(undefined);
  });
  it("check input with wrong inputs - 2", function () {
    let red = "321";
    let green = "421";
    let blue = "312";

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal(undefined);
  });
  it("check input with wrong inputs - 3", function () {
    let red = "532";
    let green = [];
    let blue = [];

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal(undefined);
  });
  it("check input with highest possible", function () {
    let red = 0;
    let green = 0;
    let blue = 0;

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal("#000000");
  });
  it("check input with lowest possible", function () {
    let red = 255;
    let green = 255;
    let blue = 255;

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal("#FFFFFF");
  });
  it("check input with fractional nums", function () {
    let red = 4.2;
    let green = 0;
    let blue = 0;

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal(undefined);
  });
  it("check input with negative nums", function () {
    let red = -255;
    let green = 255;
    let blue = -32;

    let result = rgbToHexColor(red, green, blue);

    expect(result).to.equal(undefined);
  });
});
