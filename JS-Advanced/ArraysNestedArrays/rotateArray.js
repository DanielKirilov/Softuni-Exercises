function rotateArray(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}
rotateArray(['1',
'2',
'3',
'4'],
2
)