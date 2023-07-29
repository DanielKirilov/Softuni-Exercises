function pie(arr, pie1, pie2) {
    let indexPie1 = arr.indexOf(pie1);
    let indexPie2 = arr.indexOf(pie2);
    let result = arr.slice(indexPie1, indexPie2 + 1);
    return result;
}
pie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')
