function legendaryFarming(input) {
    let inputArr = input.split(" ");
    let materials = { motes: 0, fragments: 0, shards: 0 };
    let junk = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantityMaterial = Number(inputArr[i]);
        let material = inputArr[i + 1].toLowerCase();

        if (material === "motes") {
            let legendaryItem = "Dragonwrath";

            materials[material] += quantityMaterial;

            if (materials[material] >= 250) {
                materials[material] -= 250;
                console.log(`${legendaryItem} obtained!`);
                break;
            }
        }

        else if (material === "shards") {
            let legendaryItem = "Shadowmourne";

            materials[material] += quantityMaterial;

            if (materials[material] >= 250) {
                materials[material] -= 250;
                console.log(`${legendaryItem} obtained!`);
                break;
            }
        }

        else if (material === "fragments") {
            let legendaryItem = "Valanyr";

            materials[material] += quantityMaterial;


            if (materials[material] >= 250) {
                materials[material] -= 250;
                console.log(`${legendaryItem} obtained!`);
                break;
            }
        }

        else {

            if (material.hasOwnProperty(material)) {
                junk[material] += quantityMaterial;
            }
            else {
                junk[material] = quantityMaterial;
            }
        }
    }
    let sortMaterials = Object.entries(materials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    let sortJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))

        for (let key of sortMaterials) {
            console.log(`${key[0]}: ${key[1]}`);
        }
        for (let key of sortJunk) {
            console.log(`${key[0]}: ${key[1]}`);
        }
    }

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
//legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
console.log("------------");
legendaryFarming('5 Shards 5 Motes 250 Shards')