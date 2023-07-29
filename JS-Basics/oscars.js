function oscars(input) {

    let nameOfArtist = input[0];
    let startingPoints = Number(input[1]);
    let juryCount = Number(input[0])

    let totalPoints = startingPoints;
    

    for (let index = 3; index < input.length ; index += 2) {
        let nameOfJury = (input[index]);
        let juryPoints = Number(input[index + 1]);
        
        let pointsFromJury = (nameOfJury.length * juryPoints / 2);
        totalPoints += pointsFromJury;

        if (totalPoints >= 1250.5) {
            console.log(`Congratulations, ${nameOfArtist} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
    
        } 
    
    }
    if (totalPoints < 1250.5) {
        console.log(`Sorry, ${nameOfArtist} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
    

}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])