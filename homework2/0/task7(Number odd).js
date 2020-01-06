var a = parseInt(prompt('Введите число'))
console.log(a)
if (isNaN(a)) {
    var a = parseInt(prompt('Введите число'))
}
if (a % 2 == 0) {
    alert('число четное')
}
else (a % 2 == 1) 
{
    alert('число нечетное')
}