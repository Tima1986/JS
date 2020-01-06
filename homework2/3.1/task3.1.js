var h = Number(prompt('Сколько часов'))
while (isNaN(h)) {
    var h = Number(prompt('Сколько часов'))
}
alert('В ' + h + ' часах ' + 3600 * h + ' секунд')