var arr = ['AngularJS', 'jQuery']
arr.unshift('Backbone.js')
arr.push('ReactJS')
arr.push('Vue.js')
arr.splice(1,0,'CommonJS')
console.log(arr)