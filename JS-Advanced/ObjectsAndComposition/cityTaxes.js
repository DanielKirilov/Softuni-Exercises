function cityTaxes(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            this.treasury -= this.population * this.taxRate;
        },
        applyGrowth: function applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
        },
        applyRecession: function applyRecession(percentage) {
            this.population += this.population * percentage / 100;
        }

    }
    return result
}
const city =
 cityTaxes('Tortuga',
 7000, // population
 15000); //treasury
city.collectTaxes(); 
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
//85000
//7350