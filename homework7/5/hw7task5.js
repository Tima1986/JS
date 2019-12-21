var arr = [12, 52, 3, 6, 456, 10, 0];
var newArr = arr.filter(function isNumberInRange(number) {
  return number > 0 && number < 10;
});
console.log(newArr)