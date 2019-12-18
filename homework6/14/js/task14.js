function findAndCreate() {
  var elem = document.getElementById("elem");
  var elem1 = elem.previousElementSibling;
  elem1.innerHTML = elem1.innerHTML + "!";
}
findAndCreate();
