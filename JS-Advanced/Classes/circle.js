class Circle {
  constructor(r) {
    this._radius = r;
  }
  get radius() {
    return this._radius;
  }
  get diameter() {
    return this._radius * 2;
  }
  set diameter(x) {
    this._radius = x / 2;
  }
  get area() {
    return Math.PI * this._radius * this._radius;
  }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
