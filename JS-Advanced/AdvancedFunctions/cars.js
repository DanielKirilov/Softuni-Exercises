function cars(input) {
  let objectKeeper = {};
  for (let line of input) {
    let splitInput = line.split(" ");
    let command = splitInput[0];

    switch (command) {
      case "create": {
        let name = splitInput[1];
        let inherit = splitInput[2];
        let inheritObject = splitInput[3];
        objectKeeper[name] = inherit
          ? Object.create(objectKeeper[inheritObject])
          : {};

        break;
      }
      case "set": {
        let name = splitInput[1];
        let property = splitInput[2];
        let value = splitInput[3];
        objectKeeper[name][property] = value;
        break;
      }
      case "print": {
        let result = [];
        let name = splitInput[1];
        for (const key in objectKeeper[name]) {
          result.push(`${key}:${objectKeeper[name][key]}`);
        }
        console.log(result.join(","));
        break;
      }
    }
  }
}
cars([
  "create pesho",
  "create gosho inherit pesho",
  "create stamat inherit gosho",
  "set pesho rank number1",
  "set gosho nick goshko",
  "print stamat",
]);
