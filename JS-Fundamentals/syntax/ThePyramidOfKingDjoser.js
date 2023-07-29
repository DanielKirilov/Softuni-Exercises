function thePyramidOfKingDjoser(base, increment) {
    base = Number(base);
    increment = Number(increment);

    let stoneMaterial = 0;
    let marbleMaterial = 0;
    let lapizLazulitMaterial = 0;
    let goldMaterial = 0;
    let heightCounter = 0;
    let lapizLazulitMaterialSingleTime = 0;
    let stoneMaterialSingleTime = 0;
    let marbleMaterialSingleTime = 0;
    let heightOfThePyramid = 0

    while (base >= 1) {
        heightCounter++;
        marbleMaterialSingleTime = ((base * 4) - 4) * increment;
        stoneMaterialSingleTime = (base - 2) * (base - 2) * increment;
        if (heightCounter % 5 === 0) {
            lapizLazulitMaterialSingleTime = ((base * 4) - 4) * increment;
            marbleMaterialSingleTime = 0;
        }

        if (base <= 2) {
            goldMaterial = base * base * increment;
            stoneMaterialSingleTime = 0;
            marbleMaterialSingleTime = 0;

        }
        marbleMaterial += marbleMaterialSingleTime;
        stoneMaterial += stoneMaterialSingleTime;
        lapizLazulitMaterial += lapizLazulitMaterialSingleTime;
        lapizLazulitMaterialSingleTime = 0;
        heightOfThePyramid = increment * heightCounter;
        base -= 2;

    }
    

    console.log(`Stone required: ${Math.ceil(stoneMaterial)}`);
    console.log(`Marble required: ${Math.ceil(marbleMaterial)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapizLazulitMaterial)}`);
    console.log(`Gold required: ${Math.ceil(goldMaterial)}`);
    console.log(`Final pyramid height: ${Math.floor(heightOfThePyramid)}`);
}
thePyramidOfKingDjoser(11, 1)
