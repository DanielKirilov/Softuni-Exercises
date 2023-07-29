class Stringer {
  constructor(s, l) {
    this.innerString = s;
    this.innerLength = l;
  }
  keepLengthAboveZero() {
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  increase(num) {
    this.innerLength += num;
    this.keepLengthAboveZero();
  }
  decrease(num) {
    this.innerLength -= num;
    this.keepLengthAboveZero();
  }
  toString() {
    if (this.innerLength > this.innerString.length) {
      return this.innerString.concat("...");
    }
    if (this.innerLength < this.innerString.length) {
      return this.innerString.substring(0, this.innerLength).concat("...");
    }
    if (this.innerLength == this.innerString.length) {
      return this.innerString;
    }
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
