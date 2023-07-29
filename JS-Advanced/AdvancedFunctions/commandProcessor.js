function solution() {
  let str = "";
  let obj = {
    append(value) {
      str += value;
    },
    removeStart(value) {
      str = str.substring(value);
    },
    removeEnd(value) {
      str = str.substring(0, str.length - value);
    },
    print() {
      console.log(str);
    },
  };
  return obj;
}
let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
