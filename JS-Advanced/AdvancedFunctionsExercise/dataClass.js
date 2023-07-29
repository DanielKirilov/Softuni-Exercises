class Request {
  constructor(m, u, v, mes) {
    this.method = m;
    this.uri = u;
    this.version = v;
    this.message = mes;
    this.response = undefined;
    this.fulfilled = false;
  }
}
let myData = new Request("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
