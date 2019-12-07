var arr = ['AngularJS', 'jQuery']
var dlyaLyudshix = []
arr.unshift('Backbone.js')
arr.push('ReactJS')
arr.push('Vue.js')
arr.splice(1, 0, 'CommonJS')
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'jQuery') {
        alert(arr.splice(i, 1) + ' - это здесь лишнее');
    }
}
for (var x = 0; x < arr.length; x++) {
    if (arr[x] === 'Vue.js') {
        var a = arr.splice(x, 1)
    }
}
var b = a.join()
dlyaLyudshix.push(b)
console.log(dlyaLyudshix)