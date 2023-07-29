function juiceFlavors(data) {
  let juices = {};
  for (let line of data) {
    let [juiceName, quantity] = line.split(" => ");
    quantity = Number(quantity);
    if (juices.hasOwnProperty(juiceName)) {
      let amount = juices[juiceName];
      delete juices[juiceName];
      juices[juiceName] = quantity + amount;
    } else {
      juices[juiceName] = quantity;
    }
  }

  for (let juice in juices) {
    let quantity = juices[juice];
    let count = Math.floor(quantity / 1000);
    if (count >= 1) {
      juices[juice] -= count;
      console.log(`${juice} => ${count}`);
    }
  }
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);

//Orange => 2
//Peach => 2
