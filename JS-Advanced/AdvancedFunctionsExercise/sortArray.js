function sortArray(arr, order) {
  function sortAscending(arr) {
    arr.sort((a, b) => a - b);
  }
  function sortDescending(arr) {
    arr.sort((a, b) => b - a);
  }
  switch (order) {
    case "asc":
      sortAscending(arr);
      break;
    case "desc":
      sortDescending(arr);
      break;
  }
  return arr;
}
sortArray([14, 7, 17, 6, 8], "asc");
