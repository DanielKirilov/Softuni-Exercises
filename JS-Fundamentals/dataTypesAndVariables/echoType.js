function echoType(parameterType) {
    let type = typeof(parameterType);
    
    if (type === "string" || type === "number") {
        console.log(type);
        console.log(parameterType);
    }
    else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }

}
echoType("Hello DANI")
echoType(null)