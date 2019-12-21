var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, { key: "name", age: 18 }];

function getElementsArr(argumentArr) {
  var elements = argumentArr.shift();
  if (typeof elements === "object" && elements !== null) {
    var valuesOfObject = Object.value(elements);
    getElementsArr(valuesOfObject);
    valuesOfObject.shift();
  }
  if (typeof elements !== "object" || elements === null) {
    console.log(elements);
  }
  if (argumentArr.length) {
    getElementsArr(argumentArr);
  }
}
getElementsArr(arr);
