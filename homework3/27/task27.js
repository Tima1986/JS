function convString(str) {
    arr = str.split('_');
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length - 1)
    }
    return str = arr.join('')
}
console.log(convString('var_test_text'))