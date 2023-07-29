function autoEngCompany(data) {
  let carBrands = {};
  for (let line of data) {
    let [brand, model, price] = line.split(" | ");
    price = Number(price);
    let modelCar = { model, price };

    if (carBrands.hasOwnProperty(brand)) {
      if (checkIfModelCarExists(model, brand, price)) {
      } else {
        carBrands[brand].push(modelCar);
      }
    } else {
      carBrands[brand] = [];
      carBrands[brand].push(modelCar);
    }
  }
  for (let carBrand in carBrands) {
    let carModels = carBrands[carBrand];
    console.log(carBrand);
    for (let carModel of carModels) {
      console.log(`###${carModel["model"]} -> ${carModel["price"]}`);
    }
  }
  function checkIfModelCarExists(model, brand, price) {
    for (let modelCar of carBrands[brand]) {
      if (modelCar["model"] == model) {
        modelCar["price"] += price;
        return true;
      }
    }
    return false;
  }
}
autoEngCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
