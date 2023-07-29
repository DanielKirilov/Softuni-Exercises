function listProcessor(data) {
  let resultArr = [];
  let obj = {
    add(value) {
      resultArr.push(value);
    },
    remove(value) {
      resultArr = resultArr.filter((x) => x !== value);
    },
    print() {
      console.log(resultArr.join(","));
    },
  };
  for (let word of data) {
    let [keyWord, value] = word.split(" ");
    obj[keyWord](value);
  }
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
