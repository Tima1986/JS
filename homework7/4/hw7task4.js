var digit=parseInt(prompt("Введите число"))
while (isNaN(digit)){
    var digit=parseInt(prompt("Введите число"))
}
function getDigitsSum(digit) {
  return (digit + "")
    .split("")
    .map(i => +i)
    .reduce((sum, i) => sum + i);
}
console.log(getDigitsSum(digit))