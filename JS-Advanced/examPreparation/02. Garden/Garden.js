class Garden {
  constructor(sp) {
    this.spaceAvailable = sp;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (spaceRequired <= this.spaceAvailable) {
      this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
      this.spaceAvailable -= spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    } else {
      throw new Error("Not enough space in the garden.");
    }
  }
  ripenPlant(plantName, quantity) {
    let exists = false;
    let plantProperty;
    for (let plant of this.plants) {
      if (plant.plantName == plantName) {
        exists = true;
        plantProperty = plant;
      }
    }
    if (exists) {
      if (plantProperty.ripe) {
        throw new Error(`The ${plantName} is already ripe.`);
      } else {
        if (quantity <= 0) {
          throw new Error(`The quantity cannot be zero or negative.`);
        } else {
          plantProperty.ripe = true;
          plantProperty.quantity += quantity;
          if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
          } else if (quantity >= 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
          }
        }
      }
    } else {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
  }
  harvestPlant(plantName) {
    let exists = false;
    let plantProperty;
    let index = 0;
    for (let i = 0; i < this.plants.length; i++) {
      let plant = this.plants[i];
      if (plant.plantName == plantName) {
        index = i;
        exists = true;
        plantProperty = plant;
      }
    }
    if (exists) {
      if (plantProperty.ripe) {
        this.plants.splice(index, 1);
        let space = plantProperty.spaceRequired;
        this.spaceAvailable += space;
        this.storage.push({ plantName, quantity: plantProperty.quantity });
        return `The ${plantName} has been successfully harvested.`;
      } else {
        throw new Error(
          `The ${plantName} cannot be harvested before it is ripe.`
        );
      }
    } else {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
  }
  generateReport() {
    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
    let plantsResultBox = "Plants in the garden: ";
    let storagePlantsResult = "Plants in storage: ";
    let storagePlantsArr = [];
    for (let plant of this.plants) {
      let plantName = plant.plantName;
      plantsResultBox += plantName + ", ";
    }
    plantsResultBox = plantsResultBox.substring(0, plantsResultBox.length - 2);
    if (this.storage.length > 0) {
      for (let plant of this.storage) {
        storagePlantsArr.push(`${plant.plantName} (${plant.quantity})`);
      }
      storagePlantsResult += storagePlantsArr.join(", ");
    } else {
      storagePlantsResult += `The storage is empty.`;
    }
    return `The garden has ${this.spaceAvailable} free space left.\n${plantsResultBox}\n${storagePlantsResult}`;
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());

//The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
