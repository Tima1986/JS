var arr = [1, 2, 3, -1, -2, -3];
var positiveArr = arr.filter(function isPositive(number) {
  return number > 0;
});
console.log(positiveArr)