function text(input) {
    let index = 0;
    let word = input[index];

    while (word != "Stop") {
        index++;
        console.log(word);
        word = input[index]
        
        }
        
        
    }


text(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])