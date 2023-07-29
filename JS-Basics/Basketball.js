function demo(input) {

    let cash = Number(input[0]);
    let basketballshoes = Number(cash * 0.60);
    let basektballoutfit = Number(basketballshoes * 0.80);
    let basketball = Number(basektballoutfit / 4);
    let accessories = Number(basketball / 5);

   console.log(cash + basektballoutfit + basketball + basketballshoes + accessories)



    
} 
 demo(["365"])