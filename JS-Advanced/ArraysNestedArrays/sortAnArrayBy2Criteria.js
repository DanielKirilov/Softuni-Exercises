function sortAnArrayBy2Criteria(arr) {
    arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
    // function sorting(a, b) {
    //     if (a.length === b.length) {
    //         return a.localeCompare(b);
    //     }
    //     return a.length - b.length;
    // }
    console.log(arr.join("\n"));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])