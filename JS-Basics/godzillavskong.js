function godzillavskong(input) {
    let budgetFilm = Number(input[0]);
    let crew = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let decor = budgetFilm * 0.10;

    let clothing = clothingPrice * crew;


    if (crew >= 150) {
        clothing = clothing * 0.90;
    } 
      let cost = clothing + decor;


    if (cost > budgetFilm) {
        let sum = cost - budgetFilm;
        console.log("Not enough money!");
        console.log(`Wingard needs ${sum.toFixed(2)} leva more.`);
    }  else if (cost <= budgetFilm) {
        let sum = (budgetFilm - cost);
        console.log("Action!");
        console.log(`Wingard starts filming with ${sum.toFixed(2)} leva left.`)
    }
}
godzillavskong(["15437.62",

"186",

"57.99"])