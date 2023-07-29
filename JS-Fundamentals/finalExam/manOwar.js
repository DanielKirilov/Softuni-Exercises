function solve(data) {
  let arr = [...data];
  let targetsArr = arr
    .shift()
    .split(" ")
    .map((target) => Number(target));

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let [command, value1, value2] = el.split(" ");
    value1 = Number(value1);
    value2 = Number(value2);

    switch (command) {
      case "Shoot": {
        if (checkIfIndexIsValid(value1)) {
          let target = Number(targetsArr[value1]);
          target -= value2;
          targetsArr[value1] = target;

          if (target <= 0) {
            targetsArr.splice(value1, 1);
          }
        }
        break;
      }
      case "Add": {
        if (checkIfIndexIsValid(value1)) {
          targetsArr.splice(value1, 0, value2);
        } else {
          console.log("Invalid placement!");
        }
        break;
      }
      case "Strike": {
        if (
          checkIfIndexIsValid(value1) &&
          checkIfIndexIsValid(value1 + value2) &&
          checkIfIndexIsValid(value1 - value2)
        ) {
          targetsArr.splice(value1, 1);
          targetsArr.splice(value1, value2);
          targetsArr.splice(value1 - value2, value2);
        } else {
          console.log("Strike missed!");
        }
        break;
      }
      case "End": {
        console.log(targetsArr.join("|"));
        break;
      }
    }
  }
  function checkIfIndexIsValid(i) {
    if (i < targetsArr.length && i >= 0) {
      return true;
    }
    return false;
  }
}
solve(["1 2 3 4 5", "Strike 0 1", "End"]);
// 52 23 44 96 100
