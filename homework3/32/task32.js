var tel = {
    model: '',
    brand: '',
    resolution: '',
    color: '',
    screen: ''
}
for (var prop in tel) {
    tel[prop] = prompt("Введите " + (prop)+" :");
}
console.log(tel);