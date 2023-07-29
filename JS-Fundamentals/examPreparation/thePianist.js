function thePianist(data) {
    let numberOfPieces = Number(data.shift());
    let pieces = [];
    for (let i = 0; i < numberOfPieces; i++) {
        let command = data.shift().split("|");
        let piece = command[0];
        let composer = command[1];
        let key = command[2];
        pieces.push({
            piece: piece,
            composer: composer,
            key: key,
        })
    }
    for (let line of data) {
        let tokens = line.split("|");
        let command = tokens[0];
        let values = tokens.slice(1);

        switch (command) {
            case "Add": {
                let piece = values[0];
                let composer = values[1];
                let key = values[2];
                let alreadyExists = false;
                for (let element of pieces) {
                    if (element["piece"] === piece) {
                        console.log(`${piece} is already in the collection!`);
                        alreadyExists = true;
                        break;
                    }
                }
                if (alreadyExists) {
                    break;
                }
                pieces.push({
                    piece: piece,
                    composer: composer,
                    key: key,
                })
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                break;
            }
            case "Remove": {
                let removablePiece = values[0];
                let removed = false
                for (let i = 0; i < pieces.length; i++) {
                    let currentPiece = pieces[i];
                    if (currentPiece["piece"] === removablePiece) {
                        console.log(`Successfully removed ${currentPiece["piece"]}!`);
                        pieces.splice(i, 1);
                        removed = true;
                    }
                }
                if (!removed) {
                    console.log(`Invalid operation! ${removablePiece} does not exist in the collection.`);
                }
                break;
            }
            case "ChangeKey": {
                let wantedPiece = values[0];
                let newKey = values[1];
                let changed = false;
                for (let element of pieces) {
                    if (element["piece"] === wantedPiece) {
                        element["key"] = newKey;
                        console.log(`Changed the key of ${element["piece"]} to ${newKey}!`);
                        changed = true;
                    }
                }
                if (!changed) {
                    console.log(`Invalid operation! ${wantedPiece} does not exist in the collection.`);
                }
                break;
            }
            case "Stop": {
                for (let element of pieces) {
                    let piece = element["piece"];
                    let composer = element["composer"];
                    let key = element["key"];
                    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
                }
                break;
            }
        }
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)