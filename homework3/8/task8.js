var myArray = [-10, 7, 29, 30, 5, -5, -20]
sum=0
for (var i of myArray) {
    if (i > 0) {
        sum+=i
    }
}
console.log(sum)