var str = "Привет, Мир!"
var sum = 0
for (var i = 0; i < str.length; i++) {
    sum += Number(str.charCodeAt(i));
}
console.log(sum)