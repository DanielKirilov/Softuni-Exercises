function solution() {
  let microElements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  return function manager(inputData) {
    let [command, product, amount] = inputData.split(" ");
    let recipes = {
      apple: (a) => cook(0 * a, 1 * a, 0 * a, 2 * a),
      lemonade: (a) => cook(0 * a, 10 * a, 0 * a, 20 * a),
      burger: (a) => cook(0 * a, 5 * a, 7 * a, 3 * a),
      eggs: (a) => cook(5 * a, 0 * a, 1 * a, 1 * a),
      turkey: (a) => cook(10 * a, 10 * a, 10 * a, 10 * a),
    };
    function cook(protein, carbohydrate, fat, flavour) {
      let availableProtein = microElements.protein;
      let availableCarbohydrate = microElements.carbohydrate;
      let availableFat = microElements.fat;
      let availableFlavour = microElements.flavour;

      if (
        availableProtein >= protein &&
        availableCarbohydrate >= carbohydrate &&
        availableFat >= fat &&
        availableFlavour >= flavour
      ) {
        microElements.protein -= protein;
        microElements.carbohydrate -= carbohydrate;
        microElements.fat -= fat;
        microElements.flavour -= flavour;
        return "Success";
      } else {
        if (protein > availableProtein) {
          return "Error: not enough protein in stock";
        } else if (carbohydrate > availableCarbohydrate) {
          return "Error: not enough carbohydrate in stock";
        } else if (fat > availableFat) {
          return "Error: not enough fat in stock";
        } else if (flavour > availableFlavour) {
          return "Error: not enough flavour in stock";
        }
      }
    }
    switch (command) {
      case "restock": {
        microElements[product] += Number(amount);
        return "Success";
      }
      case "prepare": {
        return recipes[product](amount);
      }
      case "report": {
        let result = [];
        for (let microElement in microElements) {
          result.push(`${microElement}=${microElements[microElement]}`);
        }
        return result.join(" ");
      }
    }
  };
}
let manager = solution();
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); // Error: not enough carbohydrate in stock;6
