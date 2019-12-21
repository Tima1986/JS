var number = parseInt(prompt("Введите число"));
while (isNaN(number)) {
  var number = parseInt(prompt("Введите число"));
}
function getDivisors(number) {
  var arr = [];
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getDivisors(number))