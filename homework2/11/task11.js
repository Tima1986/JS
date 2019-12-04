var str = prompt('Введите число и символ(h, d, w, m) без пробела')
console.log(str)
var n = parseInt(str)
console.log(n)
var h = str.indexOf('h')
console.log(h)
var d = str.indexOf('d')
var w = str.indexOf('w')
var m = str.indexOf('m')
if (h === +1) {
    alert('В ' + n + ' часах ' + 3600 * n + ' секунд')
}
else if (d === +1) {
    alert('В ' + n + ' днях ' + 86400 * n + ' секунд')
}
else if (w === +1) {
    alert('В ' + n + ' неделях ' + 604800 * n + ' секунд')
}
else if (m === +1) {
    alert('В ' + n + ' месяцах ' + 2592000 * n + ' секунд')
}
