var arr=['про','слой','ка','очень','хорошо','привет']
var sum=arr[0]+arr[1]+arr[2]
console.log(sum)
arr.splice(3, 0, sum)
console.log(arr)