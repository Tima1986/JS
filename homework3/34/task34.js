var arr = new Array(9);
for (var i = 1; i <= arr.length; i++) {
  arr[i] = new Array(9);
    for (var j = 1; j <= arr.length; j++) {
    if (j === 7) {
      break;
    }
    arr[i][j] = "[" + j + " x " + i + " = " + i * j + "]";
  }
  if (i === 6) {
    break;
  }
}
console.log(arr);