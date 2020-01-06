arr = []
var randomnum = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
for(var i = 1; i < 10; i++) {
    randomnum+=i
arr.push(randomnum)
}
console.log(arr)
for (var i of arr) {
    i = i**5
    console.log(i)
}