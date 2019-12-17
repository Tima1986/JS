var selector = prompt("Введите параметр");
while ((selector.startsWith("#") || selector.startsWith(".")) === false) {
  var selector = prompt("Введите параметр");
}
getInnerTextOfElement(selector);
function getInnerTextOfElement(selector) {
  if (selector.startsWith("#")) {
    var sel = selector.slice(1);
    var elem = document.getElementById(`${sel}`);
    return (elem.innerText = "Здравствуй, солнце!");
  } else if (selector.startsWith(".")) {
    var sel1 = selector.slice(1);
    var elem1 = document.getElementsByClassName(`${sel1}`);
    return (elem1[0].innerText = "Здравствуй, солнце!");
  }
}