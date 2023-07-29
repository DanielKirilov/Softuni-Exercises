function argumentInfo(...args) {
  let dict = {};
  for (let element of args) {
    let typeOfArg = typeof element;
    console.log(`${typeOfArg}: ${element}`);
    if (!dict[typeOfArg]) {
      dict[typeOfArg] = 1;
      continue;
    }
    dict[typeOfArg]++;
  }
  let sortedDict = Object.entries(dict).sort((a, b) => b[1] - a[1]);
  for (let [property, value] of sortedDict) {
    console.log(`${property} = ${value}`);
  }
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1


