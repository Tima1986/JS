var numFlat = parseInt(prompt('Введите номер квартиры'))
var numFloor = parseInt(prompt('Введите количество этажей дома'))
var numFlatfloor = parseInt(prompt('Введите количество квартир на этаже'))
var a, b, c, d
a = Math.trunc(numFlat / numFlatfloor)
console.log(a)
b = a + 1
console.log(b)
c = b % numFloor
console.log(c)
d = Math.trunc(b / numFloor) + 1
console.log(d)
alert('Квартира находиться на ' + c + ' этаже' + ' в ' + d + ' подъезде')
