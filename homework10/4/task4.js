let arr = [12, 0, 56, 23, 5, 16, 1];
function arraySort(arr) {
  let newArr = [];
  while (arr.length > 0) {
    let current = arr.shift();
    for (let elem of newArr) {
      if (current < elem) {
        newArr.splice(newArr.indexOf(elem), 0, current);
        current = null;
        break;
      }
    }
    if (current) newArr.push(current);
  }
  return newArr;
}
console.log(arraySort(arr));