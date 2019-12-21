arr = [44, 112, 11, 25, 4];
var evenArr = arr.filter(function isEven(number) {
  return number % 2 === 0;
});
console.log(evenArr)
