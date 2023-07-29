// function salaryExercise(input) {

//     let tabsOpened = Number(input[0]);
//     let salary = Number(input[1]);

//     for (index = 2; index <= input.length ; index++) {
//         currentTab = input[index];

//         switch (currentTab) {
//             case "Facebook":
//                 salary = salary - 150; break;
//             case "Instagram":
//                 salary = salary - 100; break;
//             case "Reddit":
//                 salary = salary - 50; break;

//         }

//     }
//     if (salary <= 0) {
//         console.log("You have lost your salary."); 

//     }
//     else if (salary > 0) {
//         console.log(`${salary}`);
        
//     }

// }
function lostAttention (input) {
    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);
 
    let fine = 0;
 
    for (let i = 2; i <= tabsOpened; i++) {
        let site = input[i];
        switch (site) {
            case "Facebook":
                fine += 150;
                break;
 
            case "Instagram":
                fine += 100;
                break;
 
            case "Reddit":
                fine += 50;
                break;
 
        }
        salary -= fine;
 
    }
 
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
lostAttention(["10",

"750",

,

"Dev.bg",

,

,

,

,

])