class List {
  constructor() {
    this.collection = [];
    this.size = 0;
  }
  updateSize() {
    this.size = this.collection.length;
  }
  orderList() {
    this.collection.sort((a, b) => a - b);
  }
  add(element) {
    this.collection.push(element);
    this.updateSize();
    this.orderList();
  }
  remove(index) {
    if (this.collection[index] == undefined) {
      return;
    }
    this.collection.splice(index, 1);
    this.updateSize();
    this.orderList();
  }
  get(index) {
    if (this.collection[index] == undefined) {
      return;
    }
    this.updateSize();
    this.orderList();
    return this.collection[index];
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
