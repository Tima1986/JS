var arr = []
var el
for (var i = 0; i < 5; i++) {
    el = prompt("Введите значение:")
    arr.push(el)
}
console.log(arr)
var sum = 0
for (var x of arr) {
    if (isNaN(x)){
        continue
        
    }
    else if (parseInt(x)){
        sum += x++
    }
}
alert(sum)