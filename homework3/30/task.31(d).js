var arr = ['AngularJS', 'jQuery']
arr.unshift('Backbone.js')
arr.push('ReactJS')
arr.push('Vue.js')
arr.splice(1, 0, 'CommonJS')
for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'jQuery') {
      alert(arr.splice(i, 1) + ' - это здесь лишнее');
  }
}
  console.log(arr)