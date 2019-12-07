var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
var sum = 0
for (var i of arr) {
    if (parseInt(i)) {
        sum += i++
    }
    else if (isNaN(i)){
        continue
    }
}
alert(sum)