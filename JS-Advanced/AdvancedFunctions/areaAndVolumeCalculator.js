function solve(area, vol, input) {
    let info = JSON.parse(input);
    let result = [];

    for (let line of info) {
        let areaValue = area.call(line);
        let volume = vol.call(line);
        result.push({area: areaValue, volume});
    }
    return result;
}
function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
