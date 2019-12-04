var arr=[11,21,31,41,51,61]
var sum=arr[0]+arr[1]
arr.splice(2, 0, sum)
console.log(arr)