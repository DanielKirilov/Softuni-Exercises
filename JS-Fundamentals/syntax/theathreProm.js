function solve(time, age) {
    age = Number(age);
    let price = 0;

    switch(time) {
        case "Weekday":
            if (0 <= age && age <= 18) {
                price = 12; 
            }
            else if (18 < age && age<= 64) {
                price = 18 ;

            } else if (64 < age && age <= 122) {
                price = 12; 

            } 
            if(age < 0|| age > 122) {console.log("Error!"); break;}
            console.log(`${price}$`);
            break;
            
        case "Weekend": 
            if (0 <= age && age <= 18) {
                price = 15;
            }
            else if (18 < age && age<= 64) {
                price = 20 ;

            } else if (64 < age && age <= 122) {
                price = 15; 

            }
            if(age < 0|| age > 122) {console.log("Error!"); break;}
            console.log(`${price}$`);
            break;
            
            
        case "Holiday":
            if (0 <= age && age <= 18) {
                price = 5;
            }
            else if (18 < age && age<= 64) {
                price = 12;

            } else if (64 < age && age <= 122) {
                price = 10; 
             
            } 
            if(age < 0 || age > 122) {console.log("Error!"); break;}
            console.log(`${price}$`);
            break;
           
            
            
   
}
}
solve("Weekday", "-42")