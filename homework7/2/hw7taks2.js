function sumNumber(number) {
  var result = (number + "")
    .split("")
    .map(i => +i)
    .reduce((sum, i) => sum + i);
  number = result;
  if (result > 9) {
    return sumNumber(number);
  }
  console.log(number);
}
sumNumber(654)